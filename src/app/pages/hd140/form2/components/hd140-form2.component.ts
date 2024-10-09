import { Hd140ListService } from './../../list/service/hd140-list.service';
import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../../../common/components/button/button.component';
import { InputComponent } from '../../../../common/components/input/input.component';
import { SelectComponent } from '../../../../common/components/select/select.component';
import { RouterModule } from '@angular/router';
import { DayPickerComponent } from '../../../../common/components/dayPicker/dayPicker.component';
import { SharedModule } from '../../../../common/shared/shared.module';
import { TabService } from '../../../../common/layouts/tab/tab.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ErrorMessageComponent } from '../../../../common/components/message/error-message.component';
import { Questions, QuestionsData } from '../service/hd140-form2.interface';

@Component({
  selector: 'app-hd140-form2',
  standalone: true,
  imports: [
    SharedModule,
    ButtonComponent,
    InputComponent,
    SelectComponent,
    RouterModule,
    DayPickerComponent,
    ErrorMessageComponent,
  ],
  templateUrl: './hd140-form2.component.html',
  styleUrl: './hd140-form2.component.scss',
})
export class Hd140Form2Component implements OnInit {
  // 搜尋條件表單
  form: FormGroup;
  // 已選擇的問答
  choiceQuestions: number[] = [];
  // 模擬動態的問答資料
  questionsData: QuestionsData[] = [
    {
      problemAspects: '健康狀況',
      questions: [
        {
          id: 1,
          question: '健康良好，無須就醫',
          isChoice: false,
        },
        {
          id: 2,
          question: '雖有慢性病，但穩定追蹤或用藥',
          isChoice: false,
        },
        {
          id: 3,
          question: '除舊疾外，最近新增其他疾病，並已就醫',
          isChoice: false,
        },
        {
          id: 4,
          question: '感覺身體不適但未就醫檢查',
          isChoice: false,
        },
      ],
    },
    {
      problemAspects: '生活情形-飲食狀況',
      questions: [
        {
          id: 5,
          question: '正常用餐，無餐食問題',
          isChoice: false,
        },
        {
          id: 6,
          question: '食慾變差，影響用餐情況',
          isChoice: false,
        },
        {
          id: 7,
          question: '用餐情況不穩定',
          isChoice: false,
        },
      ],
    },
    {
      problemAspects: '生活情形-睡眠品質',
      questions: [
        {
          id: 8,
          question: '可安穩入睡',
          isChoice: false,
        },
        {
          id: 9,
          question: '時常無法入睡或易醒',
          isChoice: false,
        },
      ],
    },
    {
      problemAspects: '心理狀況',
      questions: [
        {
          id: 10,
          question: '心情愉快',
          isChoice: false,
        },
        {
          id: 11,
          question: '生活平淡但滿足',
          isChoice: false,
        },
        {
          id: 12,
          question: '負面情緒，如；憤怒、憂傷、緊張等',
          isChoice: false,
        },
        {
          id: 13,
          question: '負面話語強烈，如；覺得活著沒意義',
          isChoice: false,
        },
      ],
    },
    {
      problemAspects: '社會參與',
      questions: [
        {
          id: 14,
          question: '與家人穩定互動',
          isChoice: false,
        },
        {
          id: 15,
          question: '固定有外出活動',
          isChoice: false,
        },
        {
          id: 16,
          question: '固定與他人有接觸(含鄰居、外單位)',
          isChoice: false,
        },
        {
          id: 17,
          question: '幾乎不外出或不與他人互動',
          isChoice: false,
        },
      ],
    },
  ];

  constructor(
    private tabService: TabService, // 關閉tab的Service
    public hd140ListService: Hd140ListService // hd140ListService
  ) {
    // 初始化表單，使用 FormGroup 來組織多個 FormControl
    this.form = new FormGroup({
      // 已選擇的問題
      questionsData: new FormControl(''),
      // 補充描述
      additionalDescription: new FormControl(''),
    });
  }

  ngOnInit(): void {
    // 檢視模式，禁用表單
    if (this.hd140ListService.isView) {
      this.form.disable();
    }
  }

  // 關閉當前的tab
  closeTab(identifier: string) {
    this.tabService.closeTab(identifier);
  }

  // 選取或取消選取選項
  onChoice(content: Questions) {
    content.isChoice = !content.isChoice;
    if (content.isChoice) {
      this.choiceQuestions.push(content.id);
    } else {
      this.choiceQuestions = this.choiceQuestions.filter(
        (item) => item !== content.id
      );
    }
    this.form.get('questionsData')?.setValue(this.choiceQuestions);
  }

  // // 禁用選取按鈕
  // isDisable(questionsData: QuestionsData) {
  //   return questionsData.questions.some((item) => item.isChoice);
  // }
}
