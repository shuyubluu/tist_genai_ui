import { Component, TemplateRef, ViewChild, signal } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import zhLocale from '@fullcalendar/core/locales/zh-tw';
import {
  CalendarOptions,
  DateSelectArg,
  EventClickArg,
} from '@fullcalendar/core';
import { SharedModule } from '../../../common/shared/shared.module';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import { ButtonComponent } from '../../../common/components/button/button.component';
import { INITIAL_EVENTS } from '../../../common/utils/event-utils';
import tippy from 'tippy.js'; // 引入 Tippy.js
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ModalComponent } from '../../../common/components/modal/modal.component';
import { InputComponent } from '../../../common/components/input/input.component';

@Component({
  selector: 'app-calendar',
  standalone: true,
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  imports: [SharedModule, ButtonComponent, InputComponent],
})
export class CalendarComponent {
  @ViewChild('contentTemplate', { static: true })
  contentTemplate!: TemplateRef<any>;
  dialogRef!: MatDialogRef<any>;
  modalData: any;
  selectedEvent: any;
  currentUserId = '123'; // 假設目前使用者的 ID
  isEditing = false;

  constructor(private dialog: MatDialog) {
    // 初始化日期與隨機顏色的映射
    this.initializeDateColorMap();
  }

  private dateColorMap: Map<string, string> = new Map(); // 日期顏色映射表

  private readonly availableColors: string[] = [
    '#8ee3df',
    '#f5ab82',
    '#c5a8fe',
    '#fcd481',
    '#d1d3e0',
  ];

  private lastAssignedColorIndex = -1; // 最後指派的顏色索引

  /* 初始化既有事件的顏色 */
  private initializeDateColorMap() {
    INITIAL_EVENTS.forEach((event) => {
      const eventDate = event.start?.toString().split('T')[0];
      if (eventDate && !this.dateColorMap.has(eventDate)) {
        const color = this.assignColorForDate(eventDate);
        this.dateColorMap.set(eventDate, color);
      }
    });
  }

  // 為日期指定顏色
  private assignColorForDate(date: string): string {
    if (this.dateColorMap.has(date)) {
      return this.dateColorMap.get(date)!;
    }

    // 選擇下一個顏色
    this.lastAssignedColorIndex =
      (this.lastAssignedColorIndex + 1) % this.availableColors.length;
    const assignedColor = this.availableColors[this.lastAssignedColorIndex];
    this.dateColorMap.set(date, assignedColor); // 立即儲存顏色
    return assignedColor;
  }

  // 取得日期顏色
  private getColorForDate(date: string): string | undefined {
    return this.dateColorMap.get(date);
  }

  // 日曆選項
  calendarOptions = signal<CalendarOptions>({
    plugins: [interactionPlugin, dayGridPlugin, timeGridPlugin, listPlugin],
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
    },
    initialView: 'dayGridMonth',
    initialEvents: INITIAL_EVENTS.map((event) => ({
      ...event,
      backgroundColor:
        this.getColorForDate(event.start?.toString().split('T')[0]!) ??
        this.assignColorForDate(event.start?.toString().split('T')[0]!),
      textColor: 'black',
    })),
    height: '1400px',
    // height: 'auto',
    weekends: true,
    editable: false,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    locale: zhLocale,
    firstDay: 0,
    // select: this.handleDateSelect.bind(this),
    eventClick: this.handleEventClick.bind(this),
    eventDidMount: this.handleEventDidMount.bind(this),
  });

  // 新建行程
  handleDateSelect(selectInfo: DateSelectArg) {
    const title = prompt('請輸入新建行程的標題');
    const calendarApi = selectInfo.view.calendar;
    // calendarApi.unselect();

    if (title) {
      const eventDate = selectInfo.startStr.split('T')[0];
      const eventColor =
        this.getColorForDate(eventDate) || this.assignColorForDate(eventDate);
      calendarApi.addEvent({
        id: this.createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
        backgroundColor: eventColor,
        textColor: 'black',
        extendedProps: {
          ownerId: this.currentUserId,
        },
      });
      this.dateColorMap.set(eventDate, eventColor);
    }
  }

  // 新建行程
  handleEventCreate() {
    this.isEditing = true;
    this.modalData = {
      title: '',
      startDate: '',
      endDate: '',
      location: '',
      summary: '',
      showEdit: false,
      showCreate: true,
      event: '',
    };
    this.openModal('新建行程', this.contentTemplate);
  }

  // 確定新增行程
  handleEventAdd() {
    this.isEditing = false;
    this.closeModal();
  }

  // 點擊事件處理函式
  handleEventClick(eventClickInfo: EventClickArg) {
    this.isEditing = false;
    const { event } = eventClickInfo;
    const title = event.title;
    const startDate = event.startStr.split('T')[0];
    const endDate = event.endStr.split('T')[0];
    const location = event.extendedProps['location'];
    const summary = event.extendedProps['summary'];
    const ownerId = event.extendedProps['ownerId'];
    let showEdit = false;

    if (ownerId === this.currentUserId) {
      showEdit = true;
    }

    this.modalData = {
      title: title,
      startDate: startDate,
      endDate: endDate,
      location: location,
      summary: summary,
      showEdit: showEdit,
      event: event.extendedProps,
    };

    this.selectedEvent = event;
    this.openModal(title, this.contentTemplate);
  }

  handleEventDidMount(eventMountInfo: any) {
    const title = eventMountInfo.event.title;
    const detail = eventMountInfo.event.extendedProps['detail'];

    const titleBgColor = '#f0f0f0';
    const detailBgColor = '#ffffff';

    const content = `
      <div style="background-color: ${titleBgColor}; padding: 1px;">
        <strong>${title}</strong>
      </div>
      <div style="background-color: ${detailBgColor}; padding: 1px;">
        ${detail}
      </div>
    `;

    tippy(eventMountInfo.el, {
      content: content,
      allowHTML: true,
      placement: 'bottom',
      theme: 'custom',
      arrow: true,
      offset: [0, 8],
      delay: [500, 200],
    });
  }

  createEventId() {
    return String(Math.floor(Math.random() * 10000)); // 隨機 ID 生成
  }

  toggleEdit() {
    if (this.isEditing) {
      // Save the changes (if any save logic is needed)
    }
    this.isEditing = !this.isEditing;
  }

  onDeleteClick(): void {
    if (!this.selectedEvent) {
      console.error('沒有選擇要刪除的事件。');
      return;
    }

    const ownerId = this.selectedEvent.extendedProps['ownerId'];

    if (ownerId === this.currentUserId) {
      if (confirm(`您確定要刪除行程 '${this.selectedEvent.title}' 嗎?`)) {
        this.selectedEvent.remove();
        this.selectedEvent = null;
        this.closeModal();
      }
    } else {
      alert('您無權刪除此行程。');
    }
  }

  // 關閉燈箱
  closeModal(): void {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
  }

  // 開啟燈箱
  openModal(title: string, contentTemplate: any): void {
    this.dialogRef = this.dialog.open(ModalComponent, {
      width: '600px',
      height: '550px',
      data: {
        title: title,
        contentTemplate: contentTemplate,
      },
      disableClose: true,
    });
  }

}
