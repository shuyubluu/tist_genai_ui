import {
  NzCheckboxComponent,
  NzCheckboxModule
} from "./chunk-EW5POPQ6.js";
import {
  NzEmbedEmptyComponent,
  NzEmptyModule
} from "./chunk-DNBL6EFH.js";
import {
  NzI18nService
} from "./chunk-WYBNP5E4.js";
import "./chunk-CPEEI4FP.js";
import {
  NzFormNoStatusService,
  NzFormStatusService
} from "./chunk-D3NQUC76.js";
import {
  NzButtonComponent,
  NzButtonModule
} from "./chunk-AX7MPIEO.js";
import {
  NzWaveDirective
} from "./chunk-7GFAJ2UR.js";
import {
  NzTransitionPatchDirective
} from "./chunk-COH3ALNG.js";
import "./chunk-NZX5DZGQ.js";
import "./chunk-JT2J3PGN.js";
import "./chunk-VFIRTQT7.js";
import {
  NzIconDirective,
  NzIconModule
} from "./chunk-TXUIS5HS.js";
import "./chunk-5QBFNWJX.js";
import "./chunk-26IXARRV.js";
import {
  InputBoolean,
  getStatusClassNames,
  toArray
} from "./chunk-2XDAPGF7.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-JP7V4SKK.js";
import "./chunk-3IHDIFKQ.js";
import "./chunk-KRQU6TMY.js";
import "./chunk-27BDGVS6.js";
import "./chunk-FC5P2ETV.js";
import "./chunk-TSXQWD3Z.js";
import {
  Directionality
} from "./chunk-57AWUXTH.js";
import "./chunk-ZOYVW6L3.js";
import "./chunk-TJB6JTTH.js";
import "./chunk-32XQDYY7.js";
import "./chunk-SYF74YFB.js";
import {
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  NgTemplateOutlet
} from "./chunk-NDLNUY6Z.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  NgModule,
  NgZone,
  Optional,
  Output,
  Renderer2,
  ViewChild,
  ViewChildren,
  ViewEncapsulation$1,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction6,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-DO3VT4SQ.js";
import {
  fromEvent,
  merge
} from "./chunk-GFVJDENN.js";
import "./chunk-QOAHSALO.js";
import {
  Observable,
  Subject,
  __decorate,
  distinctUntilChanged,
  map,
  of,
  startWith,
  switchMap,
  takeUntil,
  withLatestFrom
} from "./chunk-LOA65BFQ.js";
import "./chunk-ASLTLD6L.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-transfer.mjs
var _c0 = ["nz-transfer-search", ""];
var _c1 = (a0) => ({
  "ant-input-disabled": a0
});
function NzTransferSearchComponent_span_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 4);
    ɵɵlistener("click", function NzTransferSearchComponent_span_3_Template_span_click_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1._clear());
    });
    ɵɵelement(1, "span", 5);
    ɵɵelementEnd();
  }
}
var _c2 = ["headerCheckbox"];
var _c3 = ["checkboxes"];
var _c4 = (a0) => ({
  "ant-transfer__nodata": a0
});
var _c5 = (a0) => ({
  "ant-transfer-list-content-item-disabled": a0
});
var _c6 = (a0) => ({
  $implicit: a0
});
var _c7 = (a0, a1, a2, a3, a4, a5) => ({
  $implicit: a0,
  direction: a1,
  disabled: a2,
  onItemSelectAll: a3,
  onItemSelect: a4,
  stat: a5
});
function NzTransferListComponent_ng_template_0_ul_0_li_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const item_r2 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate(item_r2.title);
  }
}
function NzTransferListComponent_ng_template_0_ul_0_li_1_ng_template_4_Template(rf, ctx) {
}
function NzTransferListComponent_ng_template_0_ul_0_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 16);
    ɵɵlistener("click", function NzTransferListComponent_ng_template_0_ul_0_li_1_Template_li_click_0_listener() {
      const item_r2 = ɵɵrestoreView(_r1).$implicit;
      const ctx_r2 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r2.onItemSelect(item_r2));
    });
    ɵɵelementStart(1, "label", 17, 1);
    ɵɵlistener("nzCheckedChange", function NzTransferListComponent_ng_template_0_ul_0_li_1_Template_label_nzCheckedChange_1_listener() {
      const item_r2 = ɵɵrestoreView(_r1).$implicit;
      const ctx_r2 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r2.onItemSelect(item_r2));
    });
    ɵɵtemplate(3, NzTransferListComponent_ng_template_0_ul_0_li_1_ng_container_3_Template, 2, 1, "ng-container", 10)(4, NzTransferListComponent_ng_template_0_ul_0_li_1_ng_template_4_Template, 0, 0, "ng-template", 18, 2, ɵɵtemplateRefExtractor);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const renderContainer_r4 = ɵɵreference(5);
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵproperty("ngClass", ɵɵpureFunction1(7, _c5, ctx_r2.disabled || item_r2.disabled));
    ɵɵadvance();
    ɵɵproperty("nzChecked", item_r2.checked)("nzDisabled", ctx_r2.disabled || item_r2.disabled);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r2.render)("ngIfElse", renderContainer_r4);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.render)("ngTemplateOutletContext", ɵɵpureFunction1(9, _c6, item_r2));
  }
}
function NzTransferListComponent_ng_template_0_ul_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "ul", 14);
    ɵɵtemplate(1, NzTransferListComponent_ng_template_0_ul_0_li_1_Template, 6, 11, "li", 15);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r2.validData)("ngForTrackBy", ctx_r2.trackByHide);
  }
}
function NzTransferListComponent_ng_template_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 19);
    ɵɵelement(1, "nz-embed-empty", 20);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("nzComponentName", "transfer")("specificContent", ctx_r2.notFoundContent);
  }
}
function NzTransferListComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzTransferListComponent_ng_template_0_ul_0_Template, 2, 2, "ul", 12)(1, NzTransferListComponent_ng_template_0_div_1_Template, 2, 2, "div", 13);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("ngIf", ctx_r2.stat.shownCount > 0);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.stat.shownCount === 0);
  }
}
function NzTransferListComponent_label_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "label", 21, 3);
    ɵɵlistener("nzCheckedChange", function NzTransferListComponent_label_3_Template_label_nzCheckedChange_0_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onItemSelectAll($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("nzChecked", ctx_r2.stat.checkAll)("nzIndeterminate", ctx_r2.stat.checkHalf)("nzDisabled", ctx_r2.stat.shownCount === 0 || ctx_r2.disabled);
  }
}
function NzTransferListComponent_span_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 22);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r2.titleText);
  }
}
function NzTransferListComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 23)(1, "span", 24);
    ɵɵlistener("valueChanged", function NzTransferListComponent_div_9_Template_span_valueChanged_1_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.handleFilter($event));
    })("valueClear", function NzTransferListComponent_div_9_Template_span_valueClear_1_listener() {
      ɵɵrestoreView(_r6);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.handleClear());
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("placeholder", ctx_r2.searchPlaceholder)("disabled", ctx_r2.disabled)("value", ctx_r2.filter);
  }
}
function NzTransferListComponent_ng_container_10_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function NzTransferListComponent_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 25);
    ɵɵtemplate(2, NzTransferListComponent_ng_container_10_ng_container_2_Template, 1, 0, "ng-container", 26);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r2.renderList)("ngTemplateOutletContext", ɵɵpureFunction6(2, _c7, ctx_r2.validData, ctx_r2.direction, ctx_r2.disabled, ctx_r2.onItemSelectAll, ctx_r2.onItemSelect, ctx_r2.stat));
  }
}
function NzTransferListComponent_div_11_ng_template_1_Template(rf, ctx) {
}
function NzTransferListComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 27);
    ɵɵtemplate(1, NzTransferListComponent_div_11_ng_template_1_Template, 0, 0, "ng-template", 18);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.footer)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c6, ctx_r2.direction));
  }
}
function NzTransferComponent_div_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.nzOperations[1]);
  }
}
function NzTransferComponent_div_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.nzOperations[0]);
  }
}
function NzTransferComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 3)(1, "button", 4);
    ɵɵlistener("click", function NzTransferComponent_div_1_Template_button_click_1_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.moveToLeft());
    });
    ɵɵelement(2, "span", 5);
    ɵɵtemplate(3, NzTransferComponent_div_1_span_3_Template, 2, 1, "span", 6);
    ɵɵelementEnd();
    ɵɵelementStart(4, "button", 4);
    ɵɵlistener("click", function NzTransferComponent_div_1_Template_button_click_4_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.moveToRight());
    });
    ɵɵelement(5, "span", 7);
    ɵɵtemplate(6, NzTransferComponent_div_1_span_6_Template, 2, 1, "span", 6);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("disabled", ctx_r1.nzDisabled || !ctx_r1.leftActive)("nzType", "primary")("nzSize", "small");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1.nzOperations[1]);
    ɵɵadvance();
    ɵɵproperty("disabled", ctx_r1.nzDisabled || !ctx_r1.rightActive)("nzType", "primary")("nzSize", "small");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1.nzOperations[0]);
  }
}
function NzTransferComponent_div_2_span_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.nzOperations[0]);
  }
}
function NzTransferComponent_div_2_span_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.nzOperations[1]);
  }
}
function NzTransferComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 3)(1, "button", 4);
    ɵɵlistener("click", function NzTransferComponent_div_2_Template_button_click_1_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.moveToRight());
    });
    ɵɵelement(2, "span", 5);
    ɵɵtemplate(3, NzTransferComponent_div_2_span_3_Template, 2, 1, "span", 6);
    ɵɵelementEnd();
    ɵɵelementStart(4, "button", 4);
    ɵɵlistener("click", function NzTransferComponent_div_2_Template_button_click_4_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.moveToLeft());
    });
    ɵɵelement(5, "span", 7);
    ɵɵtemplate(6, NzTransferComponent_div_2_span_6_Template, 2, 1, "span", 6);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("disabled", ctx_r1.nzDisabled || !ctx_r1.rightActive)("nzType", "primary")("nzSize", "small");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1.nzOperations[0]);
    ɵɵadvance();
    ɵɵproperty("disabled", ctx_r1.nzDisabled || !ctx_r1.leftActive)("nzType", "primary")("nzSize", "small");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1.nzOperations[1]);
  }
}
var _NzTransferSearchComponent = class _NzTransferSearchComponent {
  // endregion
  constructor(cdr) {
    this.cdr = cdr;
    this.disabled = false;
    this.valueChanged = new EventEmitter();
    this.valueClear = new EventEmitter();
  }
  _handle() {
    this.valueChanged.emit(this.value);
  }
  _clear() {
    if (this.disabled) {
      return;
    }
    this.value = "";
    this.valueClear.emit();
  }
  ngOnChanges() {
    this.cdr.detectChanges();
  }
};
_NzTransferSearchComponent.ɵfac = function NzTransferSearchComponent_Factory(t) {
  return new (t || _NzTransferSearchComponent)(ɵɵdirectiveInject(ChangeDetectorRef));
};
_NzTransferSearchComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzTransferSearchComponent,
  selectors: [["", "nz-transfer-search", ""]],
  inputs: {
    placeholder: "placeholder",
    value: "value",
    disabled: "disabled"
  },
  outputs: {
    valueChanged: "valueChanged",
    valueClear: "valueClear"
  },
  exportAs: ["nzTransferSearch"],
  standalone: true,
  features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  attrs: _c0,
  decls: 4,
  vars: 7,
  consts: [[1, "ant-input-prefix"], ["nz-icon", "", "nzType", "search"], [1, "ant-input", 3, "ngModelChange", "ngModel", "disabled", "placeholder", "ngClass"], ["class", "ant-input-suffix", 3, "click", 4, "ngIf"], [1, "ant-input-suffix", 3, "click"], ["nz-icon", "", "nzType", "close-circle", "nzTheme", "fill", 1, "ant-input-clear-icon"]],
  template: function NzTransferSearchComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "span", 0);
      ɵɵelement(1, "span", 1);
      ɵɵelementEnd();
      ɵɵelementStart(2, "input", 2);
      ɵɵtwoWayListener("ngModelChange", function NzTransferSearchComponent_Template_input_ngModelChange_2_listener($event) {
        ɵɵtwoWayBindingSet(ctx.value, $event) || (ctx.value = $event);
        return $event;
      });
      ɵɵlistener("ngModelChange", function NzTransferSearchComponent_Template_input_ngModelChange_2_listener() {
        return ctx._handle();
      });
      ɵɵelementEnd();
      ɵɵtemplate(3, NzTransferSearchComponent_span_3_Template, 2, 0, "span", 3);
    }
    if (rf & 2) {
      ɵɵadvance(2);
      ɵɵtwoWayProperty("ngModel", ctx.value);
      ɵɵproperty("disabled", ctx.disabled)("placeholder", ctx.placeholder)("ngClass", ɵɵpureFunction1(5, _c1, ctx.disabled));
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.value && ctx.value.length > 0);
    }
  },
  dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, NzIconModule, NzIconDirective, NgClass, NgIf],
  encapsulation: 2,
  changeDetection: 0
});
var NzTransferSearchComponent = _NzTransferSearchComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTransferSearchComponent, [{
    type: Component,
    args: [{
      selector: "[nz-transfer-search]",
      exportAs: "nzTransferSearch",
      preserveWhitespaces: false,
      template: `
    <span class="ant-input-prefix">
      <span nz-icon nzType="search"></span>
    </span>
    <input
      [(ngModel)]="value"
      (ngModelChange)="_handle()"
      [disabled]="disabled"
      [placeholder]="placeholder"
      class="ant-input"
      [ngClass]="{ 'ant-input-disabled': disabled }"
    />
    <span *ngIf="value && value.length > 0" class="ant-input-suffix" (click)="_clear()">
      <span nz-icon nzType="close-circle" nzTheme="fill" class="ant-input-clear-icon"></span>
    </span>
  `,
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      imports: [FormsModule, NzIconModule, NgClass, NgIf],
      standalone: true
    }]
  }], () => [{
    type: ChangeDetectorRef
  }], {
    placeholder: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    valueChanged: [{
      type: Output
    }],
    valueClear: [{
      type: Output
    }]
  });
})();
var _NzTransferListComponent = class _NzTransferListComponent {
  get validData() {
    return this.dataSource.filter((w) => !w.hide);
  }
  trackByHide(_index, item) {
    return item.hide;
  }
  updateCheckStatus() {
    const validCount = this.dataSource.filter((w) => !w.disabled).length;
    this.stat.checkCount = this.dataSource.filter((w) => w.checked && !w.disabled).length;
    this.stat.shownCount = this.validData.length;
    this.stat.checkAll = validCount > 0 && validCount === this.stat.checkCount;
    this.stat.checkHalf = this.stat.checkCount > 0 && !this.stat.checkAll;
    this.headerCheckbox && (this.headerCheckbox.nzChecked = this.stat.checkAll);
  }
  // #endregion
  // #region search
  handleFilter(value) {
    this.filter = value;
    this.dataSource.forEach((item) => {
      item.hide = value.length > 0 && !this.matchFilter(value, item);
    });
    this.stat.shownCount = this.validData.length;
    this.filterChange.emit({
      direction: this.direction,
      value
    });
  }
  handleClear() {
    this.handleFilter("");
  }
  matchFilter(text, item) {
    if (this.filterOption) {
      return this.filterOption(text, item);
    }
    return item.title.includes(text);
  }
  // #endregion
  constructor(ngZone, cdr) {
    this.ngZone = ngZone;
    this.cdr = cdr;
    this.direction = "left";
    this.titleText = "";
    this.showSelectAll = true;
    this.dataSource = [];
    this.itemUnit = "";
    this.itemsUnit = "";
    this.filter = "";
    this.disabled = false;
    this.renderList = null;
    this.render = null;
    this.footer = null;
    this.handleSelectAll = new EventEmitter();
    this.handleSelect = new EventEmitter();
    this.filterChange = new EventEmitter();
    this.stat = {
      checkAll: false,
      checkHalf: false,
      checkCount: 0,
      shownCount: 0
    };
    this.onItemSelect = (item) => {
      if (this.disabled || item.disabled) {
        return;
      }
      item.checked = !item.checked;
      this.updateCheckStatus();
      this.handleSelect.emit(item);
    };
    this.onItemSelectAll = (status) => {
      this.dataSource.forEach((item) => {
        if (!item.disabled && !item.hide) {
          item.checked = status;
        }
      });
      this.updateCheckStatus();
      this.handleSelectAll.emit(status);
    };
  }
  markForCheck() {
    this.updateCheckStatus();
    this.cdr.markForCheck();
  }
  ngAfterViewInit() {
    this.checkboxes.changes.pipe(startWith(this.checkboxes), switchMap(() => {
      const checkboxes = this.checkboxes.toArray();
      return new Observable((subscriber) => this.ngZone.runOutsideAngular(() => merge(...checkboxes.map((checkbox) => fromEvent(checkbox.nativeElement, "click"))).subscribe(subscriber)));
    })).subscribe((event) => {
      event.stopPropagation();
    });
  }
};
_NzTransferListComponent.ɵfac = function NzTransferListComponent_Factory(t) {
  return new (t || _NzTransferListComponent)(ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ChangeDetectorRef));
};
_NzTransferListComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzTransferListComponent,
  selectors: [["nz-transfer-list"]],
  viewQuery: function NzTransferListComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c2, 5, NzCheckboxComponent);
      ɵɵviewQuery(_c3, 5, ElementRef);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.headerCheckbox = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.checkboxes = _t);
    }
  },
  hostAttrs: [1, "ant-transfer-list"],
  hostVars: 2,
  hostBindings: function NzTransferListComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("ant-transfer-list-with-footer", !!ctx.footer);
    }
  },
  inputs: {
    direction: "direction",
    titleText: "titleText",
    showSelectAll: "showSelectAll",
    dataSource: "dataSource",
    itemUnit: "itemUnit",
    itemsUnit: "itemsUnit",
    filter: "filter",
    disabled: "disabled",
    showSearch: "showSearch",
    searchPlaceholder: "searchPlaceholder",
    notFoundContent: "notFoundContent",
    filterOption: "filterOption",
    renderList: "renderList",
    render: "render",
    footer: "footer"
  },
  outputs: {
    handleSelectAll: "handleSelectAll",
    handleSelect: "handleSelect",
    filterChange: "filterChange"
  },
  exportAs: ["nzTransferList"],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  decls: 12,
  vars: 14,
  consts: [["defaultRenderList", ""], ["checkboxes", ""], ["renderContainer", ""], ["headerCheckbox", ""], [1, "ant-transfer-list-header"], ["class", "ant-transfer-list-checkbox", "nz-checkbox", "", 3, "nzChecked", "nzIndeterminate", "nzDisabled", "nzCheckedChange", 4, "ngIf"], [1, "ant-transfer-list-header-selected"], ["class", "ant-transfer-list-header-title", 4, "ngIf"], [3, "ngClass"], ["class", "ant-transfer-list-body-search-wrapper", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["class", "ant-transfer-list-footer", 4, "ngIf"], ["class", "ant-transfer-list-content", 4, "ngIf"], ["class", "ant-transfer-list-body-not-found", 4, "ngIf"], [1, "ant-transfer-list-content"], ["class", "ant-transfer-list-content-item", 3, "ngClass", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "ant-transfer-list-content-item", 3, "click", "ngClass"], ["nz-checkbox", "", 3, "nzCheckedChange", "nzChecked", "nzDisabled"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ant-transfer-list-body-not-found"], [3, "nzComponentName", "specificContent"], ["nz-checkbox", "", 1, "ant-transfer-list-checkbox", 3, "nzCheckedChange", "nzChecked", "nzIndeterminate", "nzDisabled"], [1, "ant-transfer-list-header-title"], [1, "ant-transfer-list-body-search-wrapper"], ["nz-transfer-search", "", 1, "ant-input-affix-wrapper", "ant-transfer-list-search", 3, "valueChanged", "valueClear", "placeholder", "disabled", "value"], [1, "ant-transfer-list-body-customize-wrapper"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ant-transfer-list-footer"]],
  template: function NzTransferListComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, NzTransferListComponent_ng_template_0_Template, 2, 2, "ng-template", null, 0, ɵɵtemplateRefExtractor);
      ɵɵelementStart(2, "div", 4);
      ɵɵtemplate(3, NzTransferListComponent_label_3_Template, 2, 3, "label", 5);
      ɵɵelementStart(4, "span", 6)(5, "span");
      ɵɵtext(6);
      ɵɵelementEnd()();
      ɵɵtemplate(7, NzTransferListComponent_span_7_Template, 2, 1, "span", 7);
      ɵɵelementEnd();
      ɵɵelementStart(8, "div", 8);
      ɵɵtemplate(9, NzTransferListComponent_div_9_Template, 2, 3, "div", 9)(10, NzTransferListComponent_ng_container_10_Template, 3, 9, "ng-container", 10);
      ɵɵelementEnd();
      ɵɵtemplate(11, NzTransferListComponent_div_11_Template, 2, 4, "div", 11);
    }
    if (rf & 2) {
      const defaultRenderList_r7 = ɵɵreference(1);
      ɵɵadvance(3);
      ɵɵproperty("ngIf", ctx.showSelectAll);
      ɵɵadvance(3);
      ɵɵtextInterpolate2(" ", (ctx.stat.checkCount > 0 ? ctx.stat.checkCount + "/" : "") + ctx.stat.shownCount, " ", ctx.validData.length > 1 ? ctx.itemsUnit : ctx.itemUnit, " ");
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.titleText);
      ɵɵadvance();
      ɵɵclassMap(ctx.showSearch ? "ant-transfer-list-body ant-transfer-list-body-with-search" : "ant-transfer-list-body");
      ɵɵproperty("ngClass", ɵɵpureFunction1(12, _c4, ctx.stat.shownCount === 0));
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.showSearch);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.renderList)("ngIfElse", defaultRenderList_r7);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.footer);
    }
  },
  dependencies: [NgIf, NgForOf, NgClass, NzCheckboxModule, NzCheckboxComponent, NgTemplateOutlet, NzEmptyModule, NzEmbedEmptyComponent, NzTransferSearchComponent],
  encapsulation: 2,
  changeDetection: 0
});
var NzTransferListComponent = _NzTransferListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTransferListComponent, [{
    type: Component,
    args: [{
      selector: "nz-transfer-list",
      exportAs: "nzTransferList",
      preserveWhitespaces: false,
      template: `
    <ng-template #defaultRenderList>
      <ul *ngIf="stat.shownCount > 0" class="ant-transfer-list-content">
        <li
          *ngFor="let item of validData; trackBy: trackByHide"
          (click)="onItemSelect(item)"
          class="ant-transfer-list-content-item"
          [ngClass]="{ 'ant-transfer-list-content-item-disabled': disabled || item.disabled }"
        >
          <label
            #checkboxes
            nz-checkbox
            [nzChecked]="item.checked"
            (nzCheckedChange)="onItemSelect(item)"
            [nzDisabled]="disabled || item.disabled"
          >
            <ng-container *ngIf="!render; else renderContainer">{{ item.title }}</ng-container>
            <ng-template
              #renderContainer
              [ngTemplateOutlet]="render"
              [ngTemplateOutletContext]="{ $implicit: item }"
            ></ng-template>
          </label>
        </li>
      </ul>
      <div *ngIf="stat.shownCount === 0" class="ant-transfer-list-body-not-found">
        <nz-embed-empty [nzComponentName]="'transfer'" [specificContent]="notFoundContent"></nz-embed-empty>
      </div>
    </ng-template>
    <div class="ant-transfer-list-header">
      <label
        *ngIf="showSelectAll"
        class="ant-transfer-list-checkbox"
        nz-checkbox
        #headerCheckbox
        [nzChecked]="stat.checkAll"
        (nzCheckedChange)="onItemSelectAll($event)"
        [nzIndeterminate]="stat.checkHalf"
        [nzDisabled]="stat.shownCount === 0 || disabled"
      ></label>
      <span class="ant-transfer-list-header-selected">
        <span>
          {{ (stat.checkCount > 0 ? stat.checkCount + '/' : '') + stat.shownCount }}
          {{ validData.length > 1 ? itemsUnit : itemUnit }}
        </span>
      </span>
      <span *ngIf="titleText" class="ant-transfer-list-header-title">{{ titleText }}</span>
    </div>
    <div
      class="{{ showSearch ? 'ant-transfer-list-body ant-transfer-list-body-with-search' : 'ant-transfer-list-body' }}"
      [ngClass]="{ 'ant-transfer__nodata': stat.shownCount === 0 }"
    >
      <div *ngIf="showSearch" class="ant-transfer-list-body-search-wrapper">
        <span
          nz-transfer-search
          class="ant-input-affix-wrapper ant-transfer-list-search"
          (valueChanged)="handleFilter($event)"
          (valueClear)="handleClear()"
          [placeholder]="searchPlaceholder"
          [disabled]="disabled"
          [value]="filter"
        ></span>
      </div>
      <ng-container *ngIf="renderList; else defaultRenderList">
        <div class="ant-transfer-list-body-customize-wrapper">
          <ng-container
            *ngTemplateOutlet="
              renderList;
              context: {
                $implicit: validData,
                direction: direction,
                disabled: disabled,
                onItemSelectAll: onItemSelectAll,
                onItemSelect: onItemSelect,
                stat: stat
              }
            "
          ></ng-container>
        </div>
      </ng-container>
    </div>
    <div *ngIf="footer" class="ant-transfer-list-footer">
      <ng-template [ngTemplateOutlet]="footer" [ngTemplateOutletContext]="{ $implicit: direction }"></ng-template>
    </div>
  `,
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "ant-transfer-list",
        "[class.ant-transfer-list-with-footer]": "!!footer"
      },
      imports: [NgIf, NgForOf, NgClass, NzCheckboxModule, NgTemplateOutlet, NzEmptyModule, NzTransferSearchComponent],
      standalone: true
    }]
  }], () => [{
    type: NgZone
  }, {
    type: ChangeDetectorRef
  }], {
    direction: [{
      type: Input
    }],
    titleText: [{
      type: Input
    }],
    showSelectAll: [{
      type: Input
    }],
    dataSource: [{
      type: Input
    }],
    itemUnit: [{
      type: Input
    }],
    itemsUnit: [{
      type: Input
    }],
    filter: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    showSearch: [{
      type: Input
    }],
    searchPlaceholder: [{
      type: Input
    }],
    notFoundContent: [{
      type: Input
    }],
    filterOption: [{
      type: Input
    }],
    renderList: [{
      type: Input
    }],
    render: [{
      type: Input
    }],
    footer: [{
      type: Input
    }],
    handleSelectAll: [{
      type: Output
    }],
    handleSelect: [{
      type: Output
    }],
    filterChange: [{
      type: Output
    }],
    headerCheckbox: [{
      type: ViewChild,
      args: ["headerCheckbox", {
        read: NzCheckboxComponent
      }]
    }],
    checkboxes: [{
      type: ViewChildren,
      args: ["checkboxes", {
        read: ElementRef
      }]
    }]
  });
})();
var _NzTransferComponent = class _NzTransferComponent {
  splitDataSource() {
    this.leftDataSource = [];
    this.rightDataSource = [];
    this.nzDataSource.forEach((record) => {
      if (record.direction === "right") {
        record.direction = "right";
        this.rightDataSource.push(record);
      } else {
        record.direction = "left";
        this.leftDataSource.push(record);
      }
    });
  }
  getCheckedData(direction) {
    return this[direction === "left" ? "leftDataSource" : "rightDataSource"].filter((w) => w.checked);
  }
  handleSelect(direction, checked, item) {
    const list = this.getCheckedData(direction);
    this.updateOperationStatus(direction, list.length);
    this.nzSelectChange.emit({
      direction,
      checked,
      list,
      item
    });
  }
  handleFilterChange(ret) {
    this.nzSearchChange.emit(ret);
  }
  updateOperationStatus(direction, count) {
    this[direction === "right" ? "leftActive" : "rightActive"] = (typeof count === "undefined" ? this.getCheckedData(direction).filter((w) => !w.disabled).length : count) > 0;
  }
  moveTo(direction) {
    const oppositeDirection = direction === "left" ? "right" : "left";
    this.updateOperationStatus(oppositeDirection, 0);
    const datasource = direction === "left" ? this.rightDataSource : this.leftDataSource;
    const moveList = datasource.filter((item) => item.checked === true && !item.disabled);
    this.nzCanMove({
      direction,
      list: moveList
    }).subscribe((newMoveList) => this.truthMoveTo(direction, newMoveList.filter((i) => !!i)), () => moveList.forEach((i) => i.checked = false));
  }
  truthMoveTo(direction, list) {
    const oppositeDirection = direction === "left" ? "right" : "left";
    const datasource = direction === "left" ? this.rightDataSource : this.leftDataSource;
    const targetDatasource = direction === "left" ? this.leftDataSource : this.rightDataSource;
    for (const item of list) {
      item.checked = false;
      item.hide = false;
      item.direction = direction;
      datasource.splice(datasource.indexOf(item), 1);
    }
    targetDatasource.splice(0, 0, ...list);
    this.updateOperationStatus(oppositeDirection);
    this.nzChange.emit({
      from: oppositeDirection,
      to: direction,
      list
    });
    this.markForCheckAllList();
  }
  // #endregion
  constructor(cdr, i18n, elementRef, renderer, directionality, nzFormStatusService, nzFormNoStatusService) {
    this.cdr = cdr;
    this.i18n = i18n;
    this.elementRef = elementRef;
    this.renderer = renderer;
    this.directionality = directionality;
    this.nzFormStatusService = nzFormStatusService;
    this.nzFormNoStatusService = nzFormNoStatusService;
    this.unsubscribe$ = new Subject();
    this.leftFilter = "";
    this.rightFilter = "";
    this.dir = "ltr";
    this.prefixCls = "ant-transfer";
    this.statusCls = {};
    this.hasFeedback = false;
    this.nzDisabled = false;
    this.nzDataSource = [];
    this.nzTitles = ["", ""];
    this.nzOperations = [];
    this.nzListStyle = {};
    this.nzShowSelectAll = true;
    this.nzCanMove = (arg) => of(arg.list);
    this.nzRenderList = null;
    this.nzRender = null;
    this.nzFooter = null;
    this.nzShowSearch = false;
    this.nzTargetKeys = [];
    this.nzSelectedKeys = [];
    this.nzStatus = "";
    this.nzChange = new EventEmitter();
    this.nzSearchChange = new EventEmitter();
    this.nzSelectChange = new EventEmitter();
    this.leftDataSource = [];
    this.rightDataSource = [];
    this.handleLeftSelectAll = (checked) => this.handleSelect("left", checked);
    this.handleRightSelectAll = (checked) => this.handleSelect("right", checked);
    this.handleLeftSelect = (item) => this.handleSelect("left", !!item.checked, item);
    this.handleRightSelect = (item) => this.handleSelect("right", !!item.checked, item);
    this.leftActive = false;
    this.rightActive = false;
    this.moveToLeft = () => this.moveTo("left");
    this.moveToRight = () => this.moveTo("right");
  }
  markForCheckAllList() {
    if (!this.lists) {
      return;
    }
    this.lists.forEach((i) => i.markForCheck());
  }
  handleNzTargetKeys() {
    const keys = toArray(this.nzTargetKeys);
    const hasOwnKey = (e) => e.hasOwnProperty("key");
    this.leftDataSource.forEach((e) => {
      if (hasOwnKey(e) && keys.indexOf(e.key) !== -1 && !e.disabled) {
        e.checked = true;
      }
    });
    this.moveToRight();
  }
  handleNzSelectedKeys() {
    const keys = toArray(this.nzSelectedKeys);
    this.nzDataSource.forEach((e) => {
      if (keys.indexOf(e.key) !== -1) {
        e.checked = true;
      }
    });
    const term = (ld) => ld.disabled === false && ld.checked === true;
    this.rightActive = this.leftDataSource.some(term);
    this.leftActive = this.rightDataSource.some(term);
  }
  ngOnInit() {
    this.nzFormStatusService?.formStatusChanges.pipe(distinctUntilChanged((pre, cur) => {
      return pre.status === cur.status && pre.hasFeedback === cur.hasFeedback;
    }), withLatestFrom(this.nzFormNoStatusService ? this.nzFormNoStatusService.noFormStatus : of(false)), map(([{
      status,
      hasFeedback
    }, noStatus]) => ({
      status: noStatus ? "" : status,
      hasFeedback
    })), takeUntil(this.unsubscribe$)).subscribe(({
      status,
      hasFeedback
    }) => {
      this.setStatusStyles(status, hasFeedback);
    });
    this.i18n.localeChange.pipe(takeUntil(this.unsubscribe$)).subscribe(() => {
      this.locale = this.i18n.getLocaleData("Transfer");
      this.markForCheckAllList();
    });
    this.dir = this.directionality.value;
    this.directionality.change?.pipe(takeUntil(this.unsubscribe$)).subscribe((direction) => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
  }
  ngOnChanges(changes) {
    const {
      nzStatus,
      nzDataSource,
      nzTargetKeys,
      nzSelectedKeys
    } = changes;
    if (nzDataSource) {
      this.splitDataSource();
      this.updateOperationStatus("left");
      this.updateOperationStatus("right");
      this.cdr.detectChanges();
      this.markForCheckAllList();
    }
    if (nzTargetKeys) {
      this.handleNzTargetKeys();
    }
    if (nzSelectedKeys) {
      this.handleNzSelectedKeys();
    }
    if (nzStatus) {
      this.setStatusStyles(this.nzStatus, this.hasFeedback);
    }
  }
  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
  setStatusStyles(status, hasFeedback) {
    this.hasFeedback = hasFeedback;
    this.cdr.markForCheck();
    this.statusCls = getStatusClassNames(this.prefixCls, status, hasFeedback);
    Object.keys(this.statusCls).forEach((status2) => {
      if (this.statusCls[status2]) {
        this.renderer.addClass(this.elementRef.nativeElement, status2);
      } else {
        this.renderer.removeClass(this.elementRef.nativeElement, status2);
      }
    });
  }
};
_NzTransferComponent.ɵfac = function NzTransferComponent_Factory(t) {
  return new (t || _NzTransferComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NzI18nService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(Directionality, 8), ɵɵdirectiveInject(NzFormStatusService, 8), ɵɵdirectiveInject(NzFormNoStatusService, 8));
};
_NzTransferComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzTransferComponent,
  selectors: [["nz-transfer"]],
  viewQuery: function NzTransferComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(NzTransferListComponent, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.lists = _t);
    }
  },
  hostAttrs: [1, "ant-transfer"],
  hostVars: 6,
  hostBindings: function NzTransferComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("ant-transfer-rtl", ctx.dir === "rtl")("ant-transfer-disabled", ctx.nzDisabled)("ant-transfer-customize-list", ctx.nzRenderList);
    }
  },
  inputs: {
    nzDisabled: "nzDisabled",
    nzDataSource: "nzDataSource",
    nzTitles: "nzTitles",
    nzOperations: "nzOperations",
    nzListStyle: "nzListStyle",
    nzShowSelectAll: "nzShowSelectAll",
    nzItemUnit: "nzItemUnit",
    nzItemsUnit: "nzItemsUnit",
    nzCanMove: "nzCanMove",
    nzRenderList: "nzRenderList",
    nzRender: "nzRender",
    nzFooter: "nzFooter",
    nzShowSearch: "nzShowSearch",
    nzFilterOption: "nzFilterOption",
    nzSearchPlaceholder: "nzSearchPlaceholder",
    nzNotFoundContent: "nzNotFoundContent",
    nzTargetKeys: "nzTargetKeys",
    nzSelectedKeys: "nzSelectedKeys",
    nzStatus: "nzStatus"
  },
  outputs: {
    nzChange: "nzChange",
    nzSearchChange: "nzSearchChange",
    nzSelectChange: "nzSelectChange"
  },
  exportAs: ["nzTransfer"],
  standalone: true,
  features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  decls: 4,
  vars: 32,
  consts: [["data-direction", "left", "direction", "left", 1, "ant-transfer-list", 3, "filterChange", "handleSelect", "handleSelectAll", "ngStyle", "titleText", "showSelectAll", "dataSource", "filter", "filterOption", "renderList", "render", "disabled", "showSearch", "searchPlaceholder", "notFoundContent", "itemUnit", "itemsUnit", "footer"], ["class", "ant-transfer-operation", 4, "ngIf"], ["data-direction", "right", "direction", "right", 1, "ant-transfer-list", 3, "filterChange", "handleSelect", "handleSelectAll", "ngStyle", "titleText", "showSelectAll", "dataSource", "filter", "filterOption", "renderList", "render", "disabled", "showSearch", "searchPlaceholder", "notFoundContent", "itemUnit", "itemsUnit", "footer"], [1, "ant-transfer-operation"], ["nz-button", "", "type", "button", 3, "click", "disabled", "nzType", "nzSize"], ["nz-icon", "", "nzType", "left"], [4, "ngIf"], ["nz-icon", "", "nzType", "right"]],
  template: function NzTransferComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "nz-transfer-list", 0);
      ɵɵlistener("filterChange", function NzTransferComponent_Template_nz_transfer_list_filterChange_0_listener($event) {
        return ctx.handleFilterChange($event);
      })("handleSelect", function NzTransferComponent_Template_nz_transfer_list_handleSelect_0_listener($event) {
        return ctx.handleLeftSelect($event);
      })("handleSelectAll", function NzTransferComponent_Template_nz_transfer_list_handleSelectAll_0_listener($event) {
        return ctx.handleLeftSelectAll($event);
      });
      ɵɵelementEnd();
      ɵɵtemplate(1, NzTransferComponent_div_1_Template, 7, 8, "div", 1)(2, NzTransferComponent_div_2_Template, 7, 8, "div", 1);
      ɵɵelementStart(3, "nz-transfer-list", 2);
      ɵɵlistener("filterChange", function NzTransferComponent_Template_nz_transfer_list_filterChange_3_listener($event) {
        return ctx.handleFilterChange($event);
      })("handleSelect", function NzTransferComponent_Template_nz_transfer_list_handleSelect_3_listener($event) {
        return ctx.handleRightSelect($event);
      })("handleSelectAll", function NzTransferComponent_Template_nz_transfer_list_handleSelectAll_3_listener($event) {
        return ctx.handleRightSelectAll($event);
      });
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵproperty("ngStyle", ctx.nzListStyle)("titleText", ctx.nzTitles[0])("showSelectAll", ctx.nzShowSelectAll)("dataSource", ctx.leftDataSource)("filter", ctx.leftFilter)("filterOption", ctx.nzFilterOption)("renderList", ctx.nzRenderList && ctx.nzRenderList[0])("render", ctx.nzRender)("disabled", ctx.nzDisabled)("showSearch", ctx.nzShowSearch)("searchPlaceholder", ctx.nzSearchPlaceholder || (ctx.locale == null ? null : ctx.locale.searchPlaceholder))("notFoundContent", ctx.nzNotFoundContent)("itemUnit", ctx.nzItemUnit || (ctx.locale == null ? null : ctx.locale.itemUnit))("itemsUnit", ctx.nzItemsUnit || (ctx.locale == null ? null : ctx.locale.itemsUnit))("footer", ctx.nzFooter);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.dir !== "rtl");
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.dir === "rtl");
      ɵɵadvance();
      ɵɵproperty("ngStyle", ctx.nzListStyle)("titleText", ctx.nzTitles[1])("showSelectAll", ctx.nzShowSelectAll)("dataSource", ctx.rightDataSource)("filter", ctx.rightFilter)("filterOption", ctx.nzFilterOption)("renderList", ctx.nzRenderList && ctx.nzRenderList[1])("render", ctx.nzRender)("disabled", ctx.nzDisabled)("showSearch", ctx.nzShowSearch)("searchPlaceholder", ctx.nzSearchPlaceholder || (ctx.locale == null ? null : ctx.locale.searchPlaceholder))("notFoundContent", ctx.nzNotFoundContent)("itemUnit", ctx.nzItemUnit || (ctx.locale == null ? null : ctx.locale.itemUnit))("itemsUnit", ctx.nzItemsUnit || (ctx.locale == null ? null : ctx.locale.itemsUnit))("footer", ctx.nzFooter);
    }
  },
  dependencies: [NzTransferListComponent, NgStyle, NzIconModule, NzIconDirective, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NgIf],
  encapsulation: 2,
  changeDetection: 0
});
var NzTransferComponent = _NzTransferComponent;
__decorate([InputBoolean()], NzTransferComponent.prototype, "nzDisabled", void 0);
__decorate([InputBoolean()], NzTransferComponent.prototype, "nzShowSelectAll", void 0);
__decorate([InputBoolean()], NzTransferComponent.prototype, "nzShowSearch", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTransferComponent, [{
    type: Component,
    args: [{
      selector: "nz-transfer",
      exportAs: "nzTransfer",
      preserveWhitespaces: false,
      template: `
    <nz-transfer-list
      class="ant-transfer-list"
      [ngStyle]="nzListStyle"
      data-direction="left"
      direction="left"
      [titleText]="nzTitles[0]"
      [showSelectAll]="nzShowSelectAll"
      [dataSource]="leftDataSource"
      [filter]="leftFilter"
      [filterOption]="nzFilterOption"
      (filterChange)="handleFilterChange($event)"
      [renderList]="nzRenderList && nzRenderList[0]"
      [render]="nzRender"
      [disabled]="nzDisabled"
      [showSearch]="nzShowSearch"
      [searchPlaceholder]="nzSearchPlaceholder || locale?.searchPlaceholder"
      [notFoundContent]="nzNotFoundContent"
      [itemUnit]="nzItemUnit || locale?.itemUnit"
      [itemsUnit]="nzItemsUnit || locale?.itemsUnit"
      [footer]="nzFooter"
      (handleSelect)="handleLeftSelect($event)"
      (handleSelectAll)="handleLeftSelectAll($event)"
    ></nz-transfer-list>
    <div *ngIf="dir !== 'rtl'" class="ant-transfer-operation">
      <button
        nz-button
        type="button"
        (click)="moveToLeft()"
        [disabled]="nzDisabled || !leftActive"
        [nzType]="'primary'"
        [nzSize]="'small'"
      >
        <span nz-icon nzType="left"></span>
        <span *ngIf="nzOperations[1]">{{ nzOperations[1] }}</span>
      </button>
      <button
        nz-button
        type="button"
        (click)="moveToRight()"
        [disabled]="nzDisabled || !rightActive"
        [nzType]="'primary'"
        [nzSize]="'small'"
      >
        <span nz-icon nzType="right"></span>
        <span *ngIf="nzOperations[0]">{{ nzOperations[0] }}</span>
      </button>
    </div>
    <div *ngIf="dir === 'rtl'" class="ant-transfer-operation">
      <button
        nz-button
        type="button"
        (click)="moveToRight()"
        [disabled]="nzDisabled || !rightActive"
        [nzType]="'primary'"
        [nzSize]="'small'"
      >
        <span nz-icon nzType="left"></span>
        <span *ngIf="nzOperations[0]">{{ nzOperations[0] }}</span>
      </button>
      <button
        nz-button
        type="button"
        (click)="moveToLeft()"
        [disabled]="nzDisabled || !leftActive"
        [nzType]="'primary'"
        [nzSize]="'small'"
      >
        <span nz-icon nzType="right"></span>
        <span *ngIf="nzOperations[1]">{{ nzOperations[1] }}</span>
      </button>
    </div>
    <nz-transfer-list
      class="ant-transfer-list"
      [ngStyle]="nzListStyle"
      data-direction="right"
      direction="right"
      [titleText]="nzTitles[1]"
      [showSelectAll]="nzShowSelectAll"
      [dataSource]="rightDataSource"
      [filter]="rightFilter"
      [filterOption]="nzFilterOption"
      (filterChange)="handleFilterChange($event)"
      [renderList]="nzRenderList && nzRenderList[1]"
      [render]="nzRender"
      [disabled]="nzDisabled"
      [showSearch]="nzShowSearch"
      [searchPlaceholder]="nzSearchPlaceholder || locale?.searchPlaceholder"
      [notFoundContent]="nzNotFoundContent"
      [itemUnit]="nzItemUnit || locale?.itemUnit"
      [itemsUnit]="nzItemsUnit || locale?.itemsUnit"
      [footer]="nzFooter"
      (handleSelect)="handleRightSelect($event)"
      (handleSelectAll)="handleRightSelectAll($event)"
    ></nz-transfer-list>
  `,
      host: {
        class: "ant-transfer",
        "[class.ant-transfer-rtl]": `dir === 'rtl'`,
        "[class.ant-transfer-disabled]": `nzDisabled`,
        "[class.ant-transfer-customize-list]": `nzRenderList`
      },
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      imports: [NzTransferListComponent, NgStyle, NzIconModule, NzButtonModule, NgIf],
      standalone: true
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: NzI18nService
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }, {
    type: NzFormStatusService,
    decorators: [{
      type: Optional
    }]
  }, {
    type: NzFormNoStatusService,
    decorators: [{
      type: Optional
    }]
  }], {
    lists: [{
      type: ViewChildren,
      args: [NzTransferListComponent]
    }],
    nzDisabled: [{
      type: Input
    }],
    nzDataSource: [{
      type: Input
    }],
    nzTitles: [{
      type: Input
    }],
    nzOperations: [{
      type: Input
    }],
    nzListStyle: [{
      type: Input
    }],
    nzShowSelectAll: [{
      type: Input
    }],
    nzItemUnit: [{
      type: Input
    }],
    nzItemsUnit: [{
      type: Input
    }],
    nzCanMove: [{
      type: Input
    }],
    nzRenderList: [{
      type: Input
    }],
    nzRender: [{
      type: Input
    }],
    nzFooter: [{
      type: Input
    }],
    nzShowSearch: [{
      type: Input
    }],
    nzFilterOption: [{
      type: Input
    }],
    nzSearchPlaceholder: [{
      type: Input
    }],
    nzNotFoundContent: [{
      type: Input
    }],
    nzTargetKeys: [{
      type: Input
    }],
    nzSelectedKeys: [{
      type: Input
    }],
    nzStatus: [{
      type: Input
    }],
    nzChange: [{
      type: Output
    }],
    nzSearchChange: [{
      type: Output
    }],
    nzSelectChange: [{
      type: Output
    }]
  });
})();
var _NzTransferModule = class _NzTransferModule {
};
_NzTransferModule.ɵfac = function NzTransferModule_Factory(t) {
  return new (t || _NzTransferModule)();
};
_NzTransferModule.ɵmod = ɵɵdefineNgModule({
  type: _NzTransferModule,
  imports: [NzTransferComponent, NzTransferListComponent, NzTransferSearchComponent],
  exports: [NzTransferComponent]
});
_NzTransferModule.ɵinj = ɵɵdefineInjector({
  imports: [NzTransferComponent, NzTransferListComponent, NzTransferSearchComponent]
});
var NzTransferModule = _NzTransferModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTransferModule, [{
    type: NgModule,
    args: [{
      imports: [NzTransferComponent, NzTransferListComponent, NzTransferSearchComponent],
      exports: [NzTransferComponent]
    }]
  }], null, null);
})();
export {
  NzTransferComponent,
  NzTransferListComponent,
  NzTransferModule,
  NzTransferSearchComponent
};
//# sourceMappingURL=ng-zorro-antd_transfer.js.map
