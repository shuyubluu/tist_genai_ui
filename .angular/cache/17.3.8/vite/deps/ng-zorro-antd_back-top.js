import {
  fadeMotion
} from "./chunk-SIHIQPVU.js";
import {
  NzIconDirective,
  NzIconModule
} from "./chunk-X2LBHVDY.js";
import "./chunk-5QBFNWJX.js";
import "./chunk-FC5P2ETV.js";
import "./chunk-32XQDYY7.js";
import "./chunk-SYF74YFB.js";
import {
  NzDestroyService,
  NzScrollService
} from "./chunk-5FQQD6ZD.js";
import "./chunk-J3OF5AMK.js";
import {
  NzConfigService,
  WithConfig
} from "./chunk-26IXARRV.js";
import {
  InputNumber
} from "./chunk-2XDAPGF7.js";
import "./chunk-TSXQWD3Z.js";
import {
  Directionality
} from "./chunk-57AWUXTH.js";
import {
  Platform,
  normalizePassiveListenerOptions
} from "./chunk-ZOYVW6L3.js";
import "./chunk-TJB6JTTH.js";
import {
  DOCUMENT,
  NgIf,
  NgTemplateOutlet
} from "./chunk-NDLNUY6Z.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Inject,
  Input,
  NgModule,
  NgZone,
  Optional,
  Output,
  ViewChild,
  ViewEncapsulation$1,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵviewQuery
} from "./chunk-DO3VT4SQ.js";
import "./chunk-QOAHSALO.js";
import {
  fromEvent
} from "./chunk-GFVJDENN.js";
import {
  Subject,
  Subscription,
  __decorate,
  debounceTime,
  takeUntil
} from "./chunk-LOA65BFQ.js";
import "./chunk-ASLTLD6L.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-back-top.mjs
var _c0 = ["backTop"];
function NzBackTopComponent_Conditional_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 5)(1, "div", 6);
    ɵɵelement(2, "span", 7);
    ɵɵelementEnd()();
  }
}
function NzBackTopComponent_Conditional_0_ng_template_4_Template(rf, ctx) {
}
function NzBackTopComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 3, 0);
    ɵɵtemplate(2, NzBackTopComponent_Conditional_0_ng_template_2_Template, 3, 0, "ng-template", null, 1, ɵɵtemplateRefExtractor)(4, NzBackTopComponent_Conditional_0_ng_template_4_Template, 0, 0, "ng-template", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const defaultContent_r1 = ɵɵreference(3);
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassProp("ant-back-top-rtl", ctx_r1.dir === "rtl");
    ɵɵproperty("@fadeMotion", void 0);
    ɵɵadvance(4);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.nzTemplate || defaultContent_r1);
  }
}
var NZ_CONFIG_MODULE_NAME = "backTop";
var passiveEventListenerOptions = normalizePassiveListenerOptions({
  passive: true
});
var _NzBackTopComponent = class _NzBackTopComponent {
  set backTop(backTop) {
    if (backTop) {
      this.backTopClickSubscription.unsubscribe();
      this.backTopClickSubscription = this.zone.runOutsideAngular(() => fromEvent(backTop.nativeElement, "click").pipe(takeUntil(this.destroy$)).subscribe(() => {
        this.scrollSrv.scrollTo(this.getTarget(), 0, {
          duration: this.nzDuration
        });
        if (this.nzClick.observers.length) {
          this.zone.run(() => this.nzClick.emit(true));
        }
      }));
    }
  }
  constructor(doc, nzConfigService, scrollSrv, platform, zone, cdr, destroy$, directionality) {
    this.doc = doc;
    this.nzConfigService = nzConfigService;
    this.scrollSrv = scrollSrv;
    this.platform = platform;
    this.zone = zone;
    this.cdr = cdr;
    this.destroy$ = destroy$;
    this.directionality = directionality;
    this._nzModuleName = NZ_CONFIG_MODULE_NAME;
    this.scrollListenerDestroy$ = new Subject();
    this.target = null;
    this.visible = false;
    this.dir = "ltr";
    this.nzVisibilityHeight = 400;
    this.nzDuration = 450;
    this.nzClick = new EventEmitter();
    this.backTopClickSubscription = Subscription.EMPTY;
    this.dir = this.directionality.value;
  }
  ngOnInit() {
    this.registerScrollEvent();
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
    this.dir = this.directionality.value;
  }
  getTarget() {
    return this.target || window;
  }
  handleScroll() {
    if (this.visible === this.scrollSrv.getScroll(this.getTarget()) > this.nzVisibilityHeight) {
      return;
    }
    this.visible = !this.visible;
    this.cdr.detectChanges();
  }
  registerScrollEvent() {
    if (!this.platform.isBrowser) {
      return;
    }
    this.scrollListenerDestroy$.next(true);
    this.handleScroll();
    this.zone.runOutsideAngular(() => {
      fromEvent(this.getTarget(), "scroll", passiveEventListenerOptions).pipe(debounceTime(50), takeUntil(this.scrollListenerDestroy$)).subscribe(() => this.handleScroll());
    });
  }
  ngOnDestroy() {
    this.scrollListenerDestroy$.next(true);
    this.scrollListenerDestroy$.complete();
  }
  ngOnChanges(changes) {
    const {
      nzTarget
    } = changes;
    if (nzTarget) {
      this.target = typeof this.nzTarget === "string" ? this.doc.querySelector(this.nzTarget) : this.nzTarget;
      this.registerScrollEvent();
    }
  }
};
_NzBackTopComponent.ɵfac = function NzBackTopComponent_Factory(t) {
  return new (t || _NzBackTopComponent)(ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(NzConfigService), ɵɵdirectiveInject(NzScrollService), ɵɵdirectiveInject(Platform), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NzDestroyService), ɵɵdirectiveInject(Directionality, 8));
};
_NzBackTopComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzBackTopComponent,
  selectors: [["nz-back-top"]],
  viewQuery: function NzBackTopComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.backTop = _t.first);
    }
  },
  inputs: {
    nzTemplate: "nzTemplate",
    nzVisibilityHeight: "nzVisibilityHeight",
    nzTarget: "nzTarget",
    nzDuration: "nzDuration"
  },
  outputs: {
    nzClick: "nzClick"
  },
  exportAs: ["nzBackTop"],
  standalone: true,
  features: [ɵɵProvidersFeature([NzDestroyService]), ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  decls: 1,
  vars: 1,
  consts: [["backTop", ""], ["defaultContent", ""], [1, "ant-back-top", 3, "ant-back-top-rtl"], [1, "ant-back-top"], [3, "ngTemplateOutlet"], [1, "ant-back-top-content"], [1, "ant-back-top-icon"], ["nz-icon", "", "nzType", "vertical-align-top"]],
  template: function NzBackTopComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, NzBackTopComponent_Conditional_0_Template, 5, 4, "div", 2);
    }
    if (rf & 2) {
      ɵɵconditional(0, ctx.visible ? 0 : -1);
    }
  },
  dependencies: [NgTemplateOutlet, NzIconModule, NzIconDirective],
  encapsulation: 2,
  data: {
    animation: [fadeMotion]
  },
  changeDetection: 0
});
var NzBackTopComponent = _NzBackTopComponent;
__decorate([WithConfig(), InputNumber()], NzBackTopComponent.prototype, "nzVisibilityHeight", void 0);
__decorate([InputNumber()], NzBackTopComponent.prototype, "nzDuration", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzBackTopComponent, [{
    type: Component,
    args: [{
      selector: "nz-back-top",
      exportAs: "nzBackTop",
      animations: [fadeMotion],
      standalone: true,
      imports: [NgIf, NgTemplateOutlet, NzIconModule],
      template: `
    @if (visible) {
      <div #backTop class="ant-back-top" [class.ant-back-top-rtl]="dir === 'rtl'" @fadeMotion>
        <ng-template #defaultContent>
          <div class="ant-back-top-content">
            <div class="ant-back-top-icon">
              <span nz-icon nzType="vertical-align-top"></span>
            </div>
          </div>
        </ng-template>
        <ng-template [ngTemplateOutlet]="nzTemplate || defaultContent"></ng-template>
      </div>
    }
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      preserveWhitespaces: false,
      providers: [NzDestroyService]
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: NzConfigService
  }, {
    type: NzScrollService
  }, {
    type: Platform
  }, {
    type: NgZone
  }, {
    type: ChangeDetectorRef
  }, {
    type: NzDestroyService
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }], {
    nzTemplate: [{
      type: Input
    }],
    nzVisibilityHeight: [{
      type: Input
    }],
    nzTarget: [{
      type: Input
    }],
    nzDuration: [{
      type: Input
    }],
    nzClick: [{
      type: Output
    }],
    backTop: [{
      type: ViewChild,
      args: ["backTop", {
        static: false
      }]
    }]
  });
})();
var _NzBackTopModule = class _NzBackTopModule {
};
_NzBackTopModule.ɵfac = function NzBackTopModule_Factory(t) {
  return new (t || _NzBackTopModule)();
};
_NzBackTopModule.ɵmod = ɵɵdefineNgModule({
  type: _NzBackTopModule,
  imports: [NzBackTopComponent],
  exports: [NzBackTopComponent]
});
_NzBackTopModule.ɵinj = ɵɵdefineInjector({
  imports: [NzBackTopComponent]
});
var NzBackTopModule = _NzBackTopModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzBackTopModule, [{
    type: NgModule,
    args: [{
      exports: [NzBackTopComponent],
      imports: [NzBackTopComponent]
    }]
  }], null, null);
})();
export {
  NzBackTopComponent,
  NzBackTopModule
};
//# sourceMappingURL=ng-zorro-antd_back-top.js.map
