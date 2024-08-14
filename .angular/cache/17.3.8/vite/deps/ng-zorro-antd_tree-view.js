import {
  NzNoAnimationDirective
} from "./chunk-WVLPRJS2.js";
import "./chunk-NZX5DZGQ.js";
import "./chunk-JT2J3PGN.js";
import {
  treeCollapseMotion
} from "./chunk-SIHIQPVU.js";
import {
  CdkFixedSizeVirtualScroll,
  CdkVirtualForOf,
  CdkVirtualScrollViewport
} from "./chunk-HHLWQQGS.js";
import {
  DataSource,
  isDataSource
} from "./chunk-GILPJYVF.js";
import "./chunk-FC5P2ETV.js";
import "./chunk-32XQDYY7.js";
import "./chunk-SYF74YFB.js";
import {
  NzDestroyService
} from "./chunk-5FQQD6ZD.js";
import "./chunk-J3OF5AMK.js";
import {
  InputBoolean
} from "./chunk-2XDAPGF7.js";
import "./chunk-TSXQWD3Z.js";
import {
  Directionality
} from "./chunk-57AWUXTH.js";
import "./chunk-ZOYVW6L3.js";
import "./chunk-TJB6JTTH.js";
import {
  NgForOf,
  NgIf
} from "./chunk-NDLNUY6Z.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  Directive,
  ElementRef,
  EventEmitter,
  Host,
  Inject,
  InjectionToken,
  Input,
  InputFlags,
  IterableDiffers,
  NgModule,
  NgZone,
  Optional,
  Output,
  Renderer2,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation$1,
  booleanAttribute,
  numberAttribute,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵInputTransformsFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵtemplate,
  ɵɵviewQuery
} from "./chunk-DO3VT4SQ.js";
import "./chunk-QOAHSALO.js";
import {
  animationFrameScheduler,
  asapScheduler,
  fromEvent,
  isObservable,
  merge
} from "./chunk-GFVJDENN.js";
import {
  BehaviorSubject,
  Subject,
  __decorate,
  auditTime,
  filter,
  map,
  of,
  take,
  takeUntil
} from "./chunk-LOA65BFQ.js";
import "./chunk-ASLTLD6L.js";

// node_modules/@angular/cdk/fesm2022/tree.mjs
var CDK_TREE_NODE_OUTLET_NODE = new InjectionToken("CDK_TREE_NODE_OUTLET_NODE");
var _CdkTreeNodeOutlet = class _CdkTreeNodeOutlet {
  constructor(viewContainer, _node) {
    this.viewContainer = viewContainer;
    this._node = _node;
  }
};
_CdkTreeNodeOutlet.ɵfac = function CdkTreeNodeOutlet_Factory(t) {
  return new (t || _CdkTreeNodeOutlet)(ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(CDK_TREE_NODE_OUTLET_NODE, 8));
};
_CdkTreeNodeOutlet.ɵdir = ɵɵdefineDirective({
  type: _CdkTreeNodeOutlet,
  selectors: [["", "cdkTreeNodeOutlet", ""]],
  standalone: true
});
var CdkTreeNodeOutlet = _CdkTreeNodeOutlet;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkTreeNodeOutlet, [{
    type: Directive,
    args: [{
      selector: "[cdkTreeNodeOutlet]",
      standalone: true
    }]
  }], () => [{
    type: ViewContainerRef
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [CDK_TREE_NODE_OUTLET_NODE]
    }, {
      type: Optional
    }]
  }], null);
})();
var CdkTreeNodeOutletContext = class {
  constructor(data) {
    this.$implicit = data;
  }
};
var _CdkTreeNodeDef = class _CdkTreeNodeDef {
  /** @docs-private */
  constructor(template) {
    this.template = template;
  }
};
_CdkTreeNodeDef.ɵfac = function CdkTreeNodeDef_Factory(t) {
  return new (t || _CdkTreeNodeDef)(ɵɵdirectiveInject(TemplateRef));
};
_CdkTreeNodeDef.ɵdir = ɵɵdefineDirective({
  type: _CdkTreeNodeDef,
  selectors: [["", "cdkTreeNodeDef", ""]],
  inputs: {
    when: [InputFlags.None, "cdkTreeNodeDefWhen", "when"]
  },
  standalone: true
});
var CdkTreeNodeDef = _CdkTreeNodeDef;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkTreeNodeDef, [{
    type: Directive,
    args: [{
      selector: "[cdkTreeNodeDef]",
      inputs: [{
        name: "when",
        alias: "cdkTreeNodeDefWhen"
      }],
      standalone: true
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
function getTreeNoValidDataSourceError() {
  return Error(`A valid data source must be provided.`);
}
function getTreeMultipleDefaultNodeDefsError() {
  return Error(`There can only be one default row without a when predicate function.`);
}
function getTreeMissingMatchingNodeDefError() {
  return Error(`Could not find a matching node definition for the provided node data.`);
}
function getTreeControlMissingError() {
  return Error(`Could not find a tree control for the tree.`);
}
function getTreeControlFunctionsMissingError() {
  return Error(`Could not find functions for nested/flat tree in tree control.`);
}
var _CdkTree = class _CdkTree {
  /**
   * Provides a stream containing the latest data array to render. Influenced by the tree's
   * stream of view window (what dataNodes are currently on screen).
   * Data source can be an observable of data array, or a data array to render.
   */
  get dataSource() {
    return this._dataSource;
  }
  set dataSource(dataSource) {
    if (this._dataSource !== dataSource) {
      this._switchDataSource(dataSource);
    }
  }
  constructor(_differs, _changeDetectorRef) {
    this._differs = _differs;
    this._changeDetectorRef = _changeDetectorRef;
    this._onDestroy = new Subject();
    this._levels = /* @__PURE__ */ new Map();
    this.viewChange = new BehaviorSubject({
      start: 0,
      end: Number.MAX_VALUE
    });
  }
  ngOnInit() {
    this._dataDiffer = this._differs.find([]).create(this.trackBy);
    if (!this.treeControl && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getTreeControlMissingError();
    }
  }
  ngOnDestroy() {
    this._nodeOutlet.viewContainer.clear();
    this.viewChange.complete();
    this._onDestroy.next();
    this._onDestroy.complete();
    if (this._dataSource && typeof this._dataSource.disconnect === "function") {
      this.dataSource.disconnect(this);
    }
    if (this._dataSubscription) {
      this._dataSubscription.unsubscribe();
      this._dataSubscription = null;
    }
  }
  ngAfterContentChecked() {
    const defaultNodeDefs = this._nodeDefs.filter((def) => !def.when);
    if (defaultNodeDefs.length > 1 && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getTreeMultipleDefaultNodeDefsError();
    }
    this._defaultNodeDef = defaultNodeDefs[0];
    if (this.dataSource && this._nodeDefs && !this._dataSubscription) {
      this._observeRenderChanges();
    }
  }
  // TODO(tinayuangao): Work on keyboard traversal and actions, make sure it's working for RTL
  //     and nested trees.
  /**
   * Switch to the provided data source by resetting the data and unsubscribing from the current
   * render change subscription if one exists. If the data source is null, interpret this by
   * clearing the node outlet. Otherwise start listening for new data.
   */
  _switchDataSource(dataSource) {
    if (this._dataSource && typeof this._dataSource.disconnect === "function") {
      this.dataSource.disconnect(this);
    }
    if (this._dataSubscription) {
      this._dataSubscription.unsubscribe();
      this._dataSubscription = null;
    }
    if (!dataSource) {
      this._nodeOutlet.viewContainer.clear();
    }
    this._dataSource = dataSource;
    if (this._nodeDefs) {
      this._observeRenderChanges();
    }
  }
  /** Set up a subscription for the data provided by the data source. */
  _observeRenderChanges() {
    let dataStream;
    if (isDataSource(this._dataSource)) {
      dataStream = this._dataSource.connect(this);
    } else if (isObservable(this._dataSource)) {
      dataStream = this._dataSource;
    } else if (Array.isArray(this._dataSource)) {
      dataStream = of(this._dataSource);
    }
    if (dataStream) {
      this._dataSubscription = dataStream.pipe(takeUntil(this._onDestroy)).subscribe((data) => this.renderNodeChanges(data));
    } else if (typeof ngDevMode === "undefined" || ngDevMode) {
      throw getTreeNoValidDataSourceError();
    }
  }
  /** Check for changes made in the data and render each change (node added/removed/moved). */
  renderNodeChanges(data, dataDiffer = this._dataDiffer, viewContainer = this._nodeOutlet.viewContainer, parentData) {
    const changes = dataDiffer.diff(data);
    if (!changes) {
      return;
    }
    changes.forEachOperation((item, adjustedPreviousIndex, currentIndex) => {
      if (item.previousIndex == null) {
        this.insertNode(data[currentIndex], currentIndex, viewContainer, parentData);
      } else if (currentIndex == null) {
        viewContainer.remove(adjustedPreviousIndex);
        this._levels.delete(item.item);
      } else {
        const view = viewContainer.get(adjustedPreviousIndex);
        viewContainer.move(view, currentIndex);
      }
    });
    this._changeDetectorRef.detectChanges();
  }
  /**
   * Finds the matching node definition that should be used for this node data. If there is only
   * one node definition, it is returned. Otherwise, find the node definition that has a when
   * predicate that returns true with the data. If none return true, return the default node
   * definition.
   */
  _getNodeDef(data, i) {
    if (this._nodeDefs.length === 1) {
      return this._nodeDefs.first;
    }
    const nodeDef = this._nodeDefs.find((def) => def.when && def.when(i, data)) || this._defaultNodeDef;
    if (!nodeDef && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getTreeMissingMatchingNodeDefError();
    }
    return nodeDef;
  }
  /**
   * Create the embedded view for the data node template and place it in the correct index location
   * within the data node view container.
   */
  insertNode(nodeData, index, viewContainer, parentData) {
    const node = this._getNodeDef(nodeData, index);
    const context = new CdkTreeNodeOutletContext(nodeData);
    if (this.treeControl.getLevel) {
      context.level = this.treeControl.getLevel(nodeData);
    } else if (typeof parentData !== "undefined" && this._levels.has(parentData)) {
      context.level = this._levels.get(parentData) + 1;
    } else {
      context.level = 0;
    }
    this._levels.set(nodeData, context.level);
    const container = viewContainer ? viewContainer : this._nodeOutlet.viewContainer;
    container.createEmbeddedView(node.template, context, index);
    if (CdkTreeNode.mostRecentTreeNode) {
      CdkTreeNode.mostRecentTreeNode.data = nodeData;
    }
  }
};
_CdkTree.ɵfac = function CdkTree_Factory(t) {
  return new (t || _CdkTree)(ɵɵdirectiveInject(IterableDiffers), ɵɵdirectiveInject(ChangeDetectorRef));
};
_CdkTree.ɵcmp = ɵɵdefineComponent({
  type: _CdkTree,
  selectors: [["cdk-tree"]],
  contentQueries: function CdkTree_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, CdkTreeNodeDef, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._nodeDefs = _t);
    }
  },
  viewQuery: function CdkTree_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(CdkTreeNodeOutlet, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._nodeOutlet = _t.first);
    }
  },
  hostAttrs: ["role", "tree", 1, "cdk-tree"],
  inputs: {
    dataSource: "dataSource",
    treeControl: "treeControl",
    trackBy: "trackBy"
  },
  exportAs: ["cdkTree"],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  decls: 1,
  vars: 0,
  consts: [["cdkTreeNodeOutlet", ""]],
  template: function CdkTree_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementContainer(0, 0);
    }
  },
  dependencies: [CdkTreeNodeOutlet],
  encapsulation: 2
});
var CdkTree = _CdkTree;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkTree, [{
    type: Component,
    args: [{
      selector: "cdk-tree",
      exportAs: "cdkTree",
      template: `<ng-container cdkTreeNodeOutlet></ng-container>`,
      host: {
        "class": "cdk-tree",
        "role": "tree"
      },
      encapsulation: ViewEncapsulation$1.None,
      // The "OnPush" status for the `CdkTree` component is effectively a noop, so we are removing it.
      // The view for `CdkTree` consists entirely of templates declared in other views. As they are
      // declared elsewhere, they are checked when their declaration points are checked.
      // tslint:disable-next-line:validate-decorators
      changeDetection: ChangeDetectionStrategy.Default,
      standalone: true,
      imports: [CdkTreeNodeOutlet]
    }]
  }], () => [{
    type: IterableDiffers
  }, {
    type: ChangeDetectorRef
  }], {
    dataSource: [{
      type: Input
    }],
    treeControl: [{
      type: Input
    }],
    trackBy: [{
      type: Input
    }],
    _nodeOutlet: [{
      type: ViewChild,
      args: [CdkTreeNodeOutlet, {
        static: true
      }]
    }],
    _nodeDefs: [{
      type: ContentChildren,
      args: [CdkTreeNodeDef, {
        // We need to use `descendants: true`, because Ivy will no longer match
        // indirect descendants if it's left as false.
        descendants: true
      }]
    }]
  });
})();
var _CdkTreeNode = class _CdkTreeNode {
  /**
   * The role of the tree node.
   * @deprecated The correct role is 'treeitem', 'group' should not be used. This input will be
   *   removed in a future version.
   * @breaking-change 12.0.0 Remove this input
   */
  get role() {
    return "treeitem";
  }
  set role(_role) {
    this._elementRef.nativeElement.setAttribute("role", _role);
  }
  /** The tree node's data. */
  get data() {
    return this._data;
  }
  set data(value) {
    if (value !== this._data) {
      this._data = value;
      this._setRoleFromData();
      this._dataChanges.next();
    }
  }
  get isExpanded() {
    return this._tree.treeControl.isExpanded(this._data);
  }
  get level() {
    return this._tree.treeControl.getLevel ? this._tree.treeControl.getLevel(this._data) : this._parentNodeAriaLevel;
  }
  constructor(_elementRef, _tree) {
    this._elementRef = _elementRef;
    this._tree = _tree;
    this._destroyed = new Subject();
    this._dataChanges = new Subject();
    _CdkTreeNode.mostRecentTreeNode = this;
    this.role = "treeitem";
  }
  ngOnInit() {
    this._parentNodeAriaLevel = getParentNodeAriaLevel(this._elementRef.nativeElement);
    this._elementRef.nativeElement.setAttribute("aria-level", `${this.level + 1}`);
  }
  ngOnDestroy() {
    if (_CdkTreeNode.mostRecentTreeNode === this) {
      _CdkTreeNode.mostRecentTreeNode = null;
    }
    this._dataChanges.complete();
    this._destroyed.next();
    this._destroyed.complete();
  }
  /** Focuses the menu item. Implements for FocusableOption. */
  focus() {
    this._elementRef.nativeElement.focus();
  }
  // TODO: role should eventually just be set in the component host
  _setRoleFromData() {
    if (!this._tree.treeControl.isExpandable && !this._tree.treeControl.getChildren && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getTreeControlFunctionsMissingError();
    }
    this.role = "treeitem";
  }
};
_CdkTreeNode.mostRecentTreeNode = null;
_CdkTreeNode.ɵfac = function CdkTreeNode_Factory(t) {
  return new (t || _CdkTreeNode)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(CdkTree));
};
_CdkTreeNode.ɵdir = ɵɵdefineDirective({
  type: _CdkTreeNode,
  selectors: [["cdk-tree-node"]],
  hostAttrs: [1, "cdk-tree-node"],
  hostVars: 1,
  hostBindings: function CdkTreeNode_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("aria-expanded", ctx.isExpanded);
    }
  },
  inputs: {
    role: "role"
  },
  exportAs: ["cdkTreeNode"],
  standalone: true
});
var CdkTreeNode = _CdkTreeNode;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkTreeNode, [{
    type: Directive,
    args: [{
      selector: "cdk-tree-node",
      exportAs: "cdkTreeNode",
      host: {
        "class": "cdk-tree-node",
        "[attr.aria-expanded]": "isExpanded"
      },
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: CdkTree
  }], {
    role: [{
      type: Input
    }]
  });
})();
function getParentNodeAriaLevel(nodeElement) {
  let parent = nodeElement.parentElement;
  while (parent && !isNodeElement(parent)) {
    parent = parent.parentElement;
  }
  if (!parent) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      throw Error("Incorrect tree structure containing detached node.");
    } else {
      return -1;
    }
  } else if (parent.classList.contains("cdk-nested-tree-node")) {
    return numberAttribute(parent.getAttribute("aria-level"));
  } else {
    return 0;
  }
}
function isNodeElement(element) {
  const classList = element.classList;
  return !!(classList?.contains("cdk-nested-tree-node") || classList?.contains("cdk-tree"));
}
var _CdkNestedTreeNode = class _CdkNestedTreeNode extends CdkTreeNode {
  constructor(elementRef, tree, _differs) {
    super(elementRef, tree);
    this._differs = _differs;
  }
  ngAfterContentInit() {
    this._dataDiffer = this._differs.find([]).create(this._tree.trackBy);
    if (!this._tree.treeControl.getChildren && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getTreeControlFunctionsMissingError();
    }
    const childrenNodes = this._tree.treeControl.getChildren(this.data);
    if (Array.isArray(childrenNodes)) {
      this.updateChildrenNodes(childrenNodes);
    } else if (isObservable(childrenNodes)) {
      childrenNodes.pipe(takeUntil(this._destroyed)).subscribe((result) => this.updateChildrenNodes(result));
    }
    this.nodeOutlet.changes.pipe(takeUntil(this._destroyed)).subscribe(() => this.updateChildrenNodes());
  }
  // This is a workaround for https://github.com/angular/angular/issues/23091
  // In aot mode, the lifecycle hooks from parent class are not called.
  ngOnInit() {
    super.ngOnInit();
  }
  ngOnDestroy() {
    this._clear();
    super.ngOnDestroy();
  }
  /** Add children dataNodes to the NodeOutlet */
  updateChildrenNodes(children) {
    const outlet = this._getNodeOutlet();
    if (children) {
      this._children = children;
    }
    if (outlet && this._children) {
      const viewContainer = outlet.viewContainer;
      this._tree.renderNodeChanges(this._children, this._dataDiffer, viewContainer, this._data);
    } else {
      this._dataDiffer.diff([]);
    }
  }
  /** Clear the children dataNodes. */
  _clear() {
    const outlet = this._getNodeOutlet();
    if (outlet) {
      outlet.viewContainer.clear();
      this._dataDiffer.diff([]);
    }
  }
  /** Gets the outlet for the current node. */
  _getNodeOutlet() {
    const outlets = this.nodeOutlet;
    return outlets && outlets.find((outlet) => !outlet._node || outlet._node === this);
  }
};
_CdkNestedTreeNode.ɵfac = function CdkNestedTreeNode_Factory(t) {
  return new (t || _CdkNestedTreeNode)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(CdkTree), ɵɵdirectiveInject(IterableDiffers));
};
_CdkNestedTreeNode.ɵdir = ɵɵdefineDirective({
  type: _CdkNestedTreeNode,
  selectors: [["cdk-nested-tree-node"]],
  contentQueries: function CdkNestedTreeNode_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, CdkTreeNodeOutlet, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.nodeOutlet = _t);
    }
  },
  hostAttrs: [1, "cdk-nested-tree-node"],
  exportAs: ["cdkNestedTreeNode"],
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: CdkTreeNode,
    useExisting: _CdkNestedTreeNode
  }, {
    provide: CDK_TREE_NODE_OUTLET_NODE,
    useExisting: _CdkNestedTreeNode
  }]), ɵɵInheritDefinitionFeature]
});
var CdkNestedTreeNode = _CdkNestedTreeNode;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkNestedTreeNode, [{
    type: Directive,
    args: [{
      selector: "cdk-nested-tree-node",
      exportAs: "cdkNestedTreeNode",
      providers: [{
        provide: CdkTreeNode,
        useExisting: CdkNestedTreeNode
      }, {
        provide: CDK_TREE_NODE_OUTLET_NODE,
        useExisting: CdkNestedTreeNode
      }],
      host: {
        "class": "cdk-nested-tree-node"
      },
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: CdkTree
  }, {
    type: IterableDiffers
  }], {
    nodeOutlet: [{
      type: ContentChildren,
      args: [CdkTreeNodeOutlet, {
        // We need to use `descendants: true`, because Ivy will no longer match
        // indirect descendants if it's left as false.
        descendants: true
      }]
    }]
  });
})();
var cssUnitPattern = /([A-Za-z%]+)$/;
var _CdkTreeNodePadding = class _CdkTreeNodePadding {
  /** The level of depth of the tree node. The padding will be `level * indent` pixels. */
  get level() {
    return this._level;
  }
  set level(value) {
    this._setLevelInput(value);
  }
  /**
   * The indent for each level. Can be a number or a CSS string.
   * Default number 40px from material design menu sub-menu spec.
   */
  get indent() {
    return this._indent;
  }
  set indent(indent) {
    this._setIndentInput(indent);
  }
  constructor(_treeNode, _tree, _element, _dir) {
    this._treeNode = _treeNode;
    this._tree = _tree;
    this._element = _element;
    this._dir = _dir;
    this._destroyed = new Subject();
    this.indentUnits = "px";
    this._indent = 40;
    this._setPadding();
    if (_dir) {
      _dir.change.pipe(takeUntil(this._destroyed)).subscribe(() => this._setPadding(true));
    }
    _treeNode._dataChanges.subscribe(() => this._setPadding());
  }
  ngOnDestroy() {
    this._destroyed.next();
    this._destroyed.complete();
  }
  /** The padding indent value for the tree node. Returns a string with px numbers if not null. */
  _paddingIndent() {
    const nodeLevel = this._treeNode.data && this._tree.treeControl.getLevel ? this._tree.treeControl.getLevel(this._treeNode.data) : null;
    const level = this._level == null ? nodeLevel : this._level;
    return typeof level === "number" ? `${level * this._indent}${this.indentUnits}` : null;
  }
  _setPadding(forceChange = false) {
    const padding = this._paddingIndent();
    if (padding !== this._currentPadding || forceChange) {
      const element = this._element.nativeElement;
      const paddingProp = this._dir && this._dir.value === "rtl" ? "paddingRight" : "paddingLeft";
      const resetProp = paddingProp === "paddingLeft" ? "paddingRight" : "paddingLeft";
      element.style[paddingProp] = padding || "";
      element.style[resetProp] = "";
      this._currentPadding = padding;
    }
  }
  /**
   * This has been extracted to a util because of TS 4 and VE.
   * View Engine doesn't support property rename inheritance.
   * TS 4.0 doesn't allow properties to override accessors or vice-versa.
   * @docs-private
   */
  _setLevelInput(value) {
    this._level = isNaN(value) ? null : value;
    this._setPadding();
  }
  /**
   * This has been extracted to a util because of TS 4 and VE.
   * View Engine doesn't support property rename inheritance.
   * TS 4.0 doesn't allow properties to override accessors or vice-versa.
   * @docs-private
   */
  _setIndentInput(indent) {
    let value = indent;
    let units = "px";
    if (typeof indent === "string") {
      const parts = indent.split(cssUnitPattern);
      value = parts[0];
      units = parts[1] || units;
    }
    this.indentUnits = units;
    this._indent = numberAttribute(value);
    this._setPadding();
  }
};
_CdkTreeNodePadding.ɵfac = function CdkTreeNodePadding_Factory(t) {
  return new (t || _CdkTreeNodePadding)(ɵɵdirectiveInject(CdkTreeNode), ɵɵdirectiveInject(CdkTree), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Directionality, 8));
};
_CdkTreeNodePadding.ɵdir = ɵɵdefineDirective({
  type: _CdkTreeNodePadding,
  selectors: [["", "cdkTreeNodePadding", ""]],
  inputs: {
    level: [InputFlags.HasDecoratorInputTransform, "cdkTreeNodePadding", "level", numberAttribute],
    indent: [InputFlags.None, "cdkTreeNodePaddingIndent", "indent"]
  },
  standalone: true,
  features: [ɵɵInputTransformsFeature]
});
var CdkTreeNodePadding = _CdkTreeNodePadding;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkTreeNodePadding, [{
    type: Directive,
    args: [{
      selector: "[cdkTreeNodePadding]",
      standalone: true
    }]
  }], () => [{
    type: CdkTreeNode
  }, {
    type: CdkTree
  }, {
    type: ElementRef
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }], {
    level: [{
      type: Input,
      args: [{
        alias: "cdkTreeNodePadding",
        transform: numberAttribute
      }]
    }],
    indent: [{
      type: Input,
      args: ["cdkTreeNodePaddingIndent"]
    }]
  });
})();
var _CdkTreeNodeToggle = class _CdkTreeNodeToggle {
  constructor(_tree, _treeNode) {
    this._tree = _tree;
    this._treeNode = _treeNode;
    this.recursive = false;
  }
  _toggle(event) {
    this.recursive ? this._tree.treeControl.toggleDescendants(this._treeNode.data) : this._tree.treeControl.toggle(this._treeNode.data);
    event.stopPropagation();
  }
};
_CdkTreeNodeToggle.ɵfac = function CdkTreeNodeToggle_Factory(t) {
  return new (t || _CdkTreeNodeToggle)(ɵɵdirectiveInject(CdkTree), ɵɵdirectiveInject(CdkTreeNode));
};
_CdkTreeNodeToggle.ɵdir = ɵɵdefineDirective({
  type: _CdkTreeNodeToggle,
  selectors: [["", "cdkTreeNodeToggle", ""]],
  hostBindings: function CdkTreeNodeToggle_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function CdkTreeNodeToggle_click_HostBindingHandler($event) {
        return ctx._toggle($event);
      });
    }
  },
  inputs: {
    recursive: [InputFlags.HasDecoratorInputTransform, "cdkTreeNodeToggleRecursive", "recursive", booleanAttribute]
  },
  standalone: true,
  features: [ɵɵInputTransformsFeature]
});
var CdkTreeNodeToggle = _CdkTreeNodeToggle;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkTreeNodeToggle, [{
    type: Directive,
    args: [{
      selector: "[cdkTreeNodeToggle]",
      host: {
        "(click)": "_toggle($event)"
      },
      standalone: true
    }]
  }], () => [{
    type: CdkTree
  }, {
    type: CdkTreeNode
  }], {
    recursive: [{
      type: Input,
      args: [{
        alias: "cdkTreeNodeToggleRecursive",
        transform: booleanAttribute
      }]
    }]
  });
})();
var EXPORTED_DECLARATIONS = [CdkNestedTreeNode, CdkTreeNodeDef, CdkTreeNodePadding, CdkTreeNodeToggle, CdkTree, CdkTreeNode, CdkTreeNodeOutlet];
var _CdkTreeModule = class _CdkTreeModule {
};
_CdkTreeModule.ɵfac = function CdkTreeModule_Factory(t) {
  return new (t || _CdkTreeModule)();
};
_CdkTreeModule.ɵmod = ɵɵdefineNgModule({
  type: _CdkTreeModule,
  imports: [CdkNestedTreeNode, CdkTreeNodeDef, CdkTreeNodePadding, CdkTreeNodeToggle, CdkTree, CdkTreeNode, CdkTreeNodeOutlet],
  exports: [CdkNestedTreeNode, CdkTreeNodeDef, CdkTreeNodePadding, CdkTreeNodeToggle, CdkTree, CdkTreeNode, CdkTreeNodeOutlet]
});
_CdkTreeModule.ɵinj = ɵɵdefineInjector({});
var CdkTreeModule = _CdkTreeModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkTreeModule, [{
    type: NgModule,
    args: [{
      imports: EXPORTED_DECLARATIONS,
      exports: EXPORTED_DECLARATIONS
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-tree-view.mjs
function NzTreeNodeIndentsComponent_span_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 1);
  }
  if (rf & 2) {
    const isEnd_r1 = ctx.$implicit;
    ɵɵclassProp("ant-tree-indent-unit-end", !isEnd_r1);
  }
}
var _c0 = [[["nz-tree-node-toggle"], ["", "nz-tree-node-toggle", ""]], [["nz-tree-node-checkbox"]], [["nz-tree-node-option"]], "*"];
var _c1 = ["nz-tree-node-toggle, [nz-tree-node-toggle]", "nz-tree-node-checkbox", "nz-tree-node-option", "*"];
function NzTreeNodeComponent_nz_tree_node_indents_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-tree-node-indents", 2);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("indents", ctx_r0.indents);
  }
}
function NzTreeNodeComponent_nz_tree_node_toggle_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "nz-tree-node-toggle", 3);
    ɵɵelement(1, "span", 4);
    ɵɵelementEnd();
  }
}
var _c2 = ["*"];
function NzTreeVirtualScrollViewComponent_ng_container_2_ng_template_1_Template(rf, ctx) {
}
function NzTreeVirtualScrollViewComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzTreeVirtualScrollViewComponent_ng_container_2_ng_template_1_Template, 0, 0, "ng-template", 4);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("data", item_r1)("compareBy", ctx_r1.compareBy);
  }
}
var _NzTreeNodeCheckboxComponent = class _NzTreeNodeCheckboxComponent {
  constructor(ngZone, ref, host, destroy$) {
    this.ngZone = ngZone;
    this.ref = ref;
    this.host = host;
    this.destroy$ = destroy$;
    this.nzClick = new EventEmitter();
  }
  ngOnInit() {
    this.ngZone.runOutsideAngular(() => fromEvent(this.host.nativeElement, "click").pipe(takeUntil(this.destroy$)).subscribe((event) => {
      if (!this.nzDisabled && this.nzClick.observers.length) {
        this.ngZone.run(() => {
          this.nzClick.emit(event);
          this.ref.markForCheck();
        });
      }
    }));
  }
};
_NzTreeNodeCheckboxComponent.ɵfac = function NzTreeNodeCheckboxComponent_Factory(t) {
  return new (t || _NzTreeNodeCheckboxComponent)(ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NzDestroyService));
};
_NzTreeNodeCheckboxComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzTreeNodeCheckboxComponent,
  selectors: [["nz-tree-node-checkbox", 3, "builtin", ""]],
  hostAttrs: [1, "ant-tree-checkbox"],
  hostVars: 6,
  hostBindings: function NzTreeNodeCheckboxComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("ant-tree-checkbox-checked", ctx.nzChecked)("ant-tree-checkbox-indeterminate", ctx.nzIndeterminate)("ant-tree-checkbox-disabled", ctx.nzDisabled);
    }
  },
  inputs: {
    nzChecked: "nzChecked",
    nzIndeterminate: "nzIndeterminate",
    nzDisabled: "nzDisabled"
  },
  outputs: {
    nzClick: "nzClick"
  },
  standalone: true,
  features: [ɵɵProvidersFeature([NzDestroyService]), ɵɵStandaloneFeature],
  decls: 1,
  vars: 0,
  consts: [[1, "ant-tree-checkbox-inner"]],
  template: function NzTreeNodeCheckboxComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelement(0, "span", 0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
var NzTreeNodeCheckboxComponent = _NzTreeNodeCheckboxComponent;
__decorate([InputBoolean()], NzTreeNodeCheckboxComponent.prototype, "nzDisabled", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTreeNodeCheckboxComponent, [{
    type: Component,
    args: [{
      selector: "nz-tree-node-checkbox:not([builtin])",
      template: ` <span class="ant-tree-checkbox-inner"></span> `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      preserveWhitespaces: false,
      host: {
        class: "ant-tree-checkbox",
        "[class.ant-tree-checkbox-checked]": `nzChecked`,
        "[class.ant-tree-checkbox-indeterminate]": `nzIndeterminate`,
        "[class.ant-tree-checkbox-disabled]": `nzDisabled`
      },
      providers: [NzDestroyService],
      standalone: true
    }]
  }], () => [{
    type: NgZone
  }, {
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NzDestroyService
  }], {
    nzChecked: [{
      type: Input
    }],
    nzIndeterminate: [{
      type: Input
    }],
    nzDisabled: [{
      type: Input
    }],
    nzClick: [{
      type: Output
    }]
  });
})();
var getParent = (nodes, node, getLevel) => {
  let index = nodes.indexOf(node);
  if (index < 0) {
    return null;
  }
  const level = getLevel(node);
  for (index--; index >= 0; index--) {
    const preLevel = getLevel(nodes[index]);
    if (preLevel + 1 === level) {
      return nodes[index];
    }
    if (preLevel + 1 < level) {
      return null;
    }
  }
  return null;
};
var getNextSibling = (nodes, node, getLevel, _index) => {
  let index = typeof _index !== "undefined" ? _index : nodes.indexOf(node);
  if (index < 0) {
    return null;
  }
  const level = getLevel(node);
  for (index++; index < nodes.length; index++) {
    const nextLevel = getLevel(nodes[index]);
    if (nextLevel < level) {
      return null;
    }
    if (nextLevel === level) {
      return nodes[index];
    }
  }
  return null;
};
var NzNodeBase = class extends CdkTreeNode {
};
var _NzTreeView = class _NzTreeView extends CdkTree {
  get dataSource() {
    return super.dataSource;
  }
  set dataSource(dataSource) {
    super.dataSource = dataSource;
  }
  constructor(differs, changeDetectorRef, noAnimation, directionality) {
    super(differs, changeDetectorRef);
    this.differs = differs;
    this.changeDetectorRef = changeDetectorRef;
    this.noAnimation = noAnimation;
    this.directionality = directionality;
    this.destroy$ = new Subject();
    this.dir = "ltr";
    this._dataSourceChanged = new Subject();
    this.nzDirectoryTree = false;
    this.nzBlockNode = false;
  }
  ngOnInit() {
    super.ngOnInit();
    if (this.directionality) {
      this.dir = this.directionality.value;
      this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
        this.dir = direction;
        this.changeDetectorRef.detectChanges();
      });
    }
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    this.destroy$.next(true);
    this.destroy$.complete();
  }
  renderNodeChanges(data, dataDiffer, viewContainer, parentData) {
    super.renderNodeChanges(data, dataDiffer, viewContainer, parentData);
    this._dataSourceChanged.next();
  }
};
_NzTreeView.ɵfac = function NzTreeView_Factory(t) {
  return new (t || _NzTreeView)(ɵɵdirectiveInject(IterableDiffers), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NzNoAnimationDirective, 9), ɵɵdirectiveInject(Directionality, 8));
};
_NzTreeView.ɵcmp = ɵɵdefineComponent({
  type: _NzTreeView,
  selectors: [["ng-component"]],
  inputs: {
    treeControl: [InputFlags.None, "nzTreeControl", "treeControl"],
    dataSource: [InputFlags.None, "nzDataSource", "dataSource"],
    nzDirectoryTree: "nzDirectoryTree",
    nzBlockNode: "nzBlockNode"
  },
  standalone: true,
  features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  decls: 0,
  vars: 0,
  template: function NzTreeView_Template(rf, ctx) {
  },
  encapsulation: 2
});
var NzTreeView = _NzTreeView;
__decorate([InputBoolean()], NzTreeView.prototype, "nzDirectoryTree", void 0);
__decorate([InputBoolean()], NzTreeView.prototype, "nzBlockNode", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTreeView, [{
    type: Component,
    args: [{
      template: "",
      standalone: true
    }]
  }], () => [{
    type: IterableDiffers
  }, {
    type: ChangeDetectorRef
  }, {
    type: NzNoAnimationDirective,
    decorators: [{
      type: Host
    }, {
      type: Optional
    }]
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }], {
    treeControl: [{
      type: Input,
      args: ["nzTreeControl"]
    }],
    dataSource: [{
      type: Input,
      args: ["nzDataSource"]
    }],
    nzDirectoryTree: [{
      type: Input
    }],
    nzBlockNode: [{
      type: Input
    }]
  });
})();
function booleanArrayToString(arr) {
  return arr.map((i) => i ? 1 : 0).join("");
}
var BUILD_INDENTS_SCHEDULER = typeof requestAnimationFrame !== "undefined" ? animationFrameScheduler : asapScheduler;
var _NzTreeNodeIndentsComponent = class _NzTreeNodeIndentsComponent {
  constructor() {
    this.indents = [];
  }
};
_NzTreeNodeIndentsComponent.ɵfac = function NzTreeNodeIndentsComponent_Factory(t) {
  return new (t || _NzTreeNodeIndentsComponent)();
};
_NzTreeNodeIndentsComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzTreeNodeIndentsComponent,
  selectors: [["nz-tree-node-indents"]],
  hostAttrs: [1, "ant-tree-indent"],
  inputs: {
    indents: "indents"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  decls: 1,
  vars: 1,
  consts: [["class", "ant-tree-indent-unit", 3, "ant-tree-indent-unit-end", 4, "ngFor", "ngForOf"], [1, "ant-tree-indent-unit"]],
  template: function NzTreeNodeIndentsComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, NzTreeNodeIndentsComponent_span_0_Template, 1, 2, "span", 0);
    }
    if (rf & 2) {
      ɵɵproperty("ngForOf", ctx.indents);
    }
  },
  dependencies: [NgForOf],
  encapsulation: 2,
  changeDetection: 0
});
var NzTreeNodeIndentsComponent = _NzTreeNodeIndentsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTreeNodeIndentsComponent, [{
    type: Component,
    args: [{
      selector: "nz-tree-node-indents",
      template: `
    <span class="ant-tree-indent-unit" [class.ant-tree-indent-unit-end]="!isEnd" *ngFor="let isEnd of indents"></span>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "ant-tree-indent"
      },
      imports: [NgForOf],
      standalone: true
    }]
  }], null, {
    indents: [{
      type: Input
    }]
  });
})();
var _NzTreeNodeIndentLineDirective = class _NzTreeNodeIndentLineDirective {
  constructor(treeNode, tree, cdr) {
    this.treeNode = treeNode;
    this.tree = tree;
    this.cdr = cdr;
    this.isLast = "unset";
    this.isLeaf = false;
    this.preNodeRef = null;
    this.nextNodeRef = null;
    this.currentIndents = "";
    this.buildIndents();
    this.checkLast();
    this.changeSubscription = merge(this.treeNode._dataChanges, tree._dataSourceChanged).pipe(auditTime(0, BUILD_INDENTS_SCHEDULER)).subscribe(() => {
      this.buildIndents();
      this.checkAdjacent();
      this.cdr.markForCheck();
    });
  }
  getIndents() {
    const indents = [];
    const nodes = this.tree.treeControl.dataNodes;
    const getLevel = this.tree.treeControl.getLevel;
    let parent = getParent(nodes, this.treeNode.data, getLevel);
    while (parent) {
      const parentNextSibling = getNextSibling(nodes, parent, getLevel);
      if (parentNextSibling) {
        indents.unshift(true);
      } else {
        indents.unshift(false);
      }
      parent = getParent(nodes, parent, getLevel);
    }
    return indents;
  }
  buildIndents() {
    if (this.treeNode.data) {
      const indents = this.getIndents();
      const diffString = booleanArrayToString(indents);
      if (diffString !== this.currentIndents) {
        this.treeNode.setIndents(this.getIndents());
        this.currentIndents = diffString;
      }
    }
  }
  /**
   * We need to add an class name for the last child node,
   * this result can also be affected when the adjacent nodes are changed.
   */
  checkAdjacent() {
    const nodes = this.tree.treeControl.dataNodes;
    const index = nodes.indexOf(this.treeNode.data);
    const preNode = nodes[index - 1] || null;
    const nextNode = nodes[index + 1] || null;
    if (this.nextNodeRef !== nextNode || this.preNodeRef !== preNode) {
      this.checkLast(index);
    }
    this.preNodeRef = preNode;
    this.nextNodeRef = nextNode;
  }
  checkLast(index) {
    const nodes = this.tree.treeControl.dataNodes;
    this.isLeaf = this.treeNode.isLeaf;
    this.isLast = !getNextSibling(nodes, this.treeNode.data, this.tree.treeControl.getLevel, index);
  }
  ngOnDestroy() {
    this.preNodeRef = null;
    this.nextNodeRef = null;
    this.changeSubscription.unsubscribe();
  }
};
_NzTreeNodeIndentLineDirective.ɵfac = function NzTreeNodeIndentLineDirective_Factory(t) {
  return new (t || _NzTreeNodeIndentLineDirective)(ɵɵdirectiveInject(NzNodeBase), ɵɵdirectiveInject(NzTreeView), ɵɵdirectiveInject(ChangeDetectorRef));
};
_NzTreeNodeIndentLineDirective.ɵdir = ɵɵdefineDirective({
  type: _NzTreeNodeIndentLineDirective,
  selectors: [["nz-tree-node", "nzTreeNodeIndentLine", ""]],
  hostAttrs: [1, "ant-tree-show-line"],
  hostVars: 2,
  hostBindings: function NzTreeNodeIndentLineDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("ant-tree-treenode-leaf-last", ctx.isLast && ctx.isLeaf);
    }
  },
  standalone: true
});
var NzTreeNodeIndentLineDirective = _NzTreeNodeIndentLineDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTreeNodeIndentLineDirective, [{
    type: Directive,
    args: [{
      selector: "nz-tree-node[nzTreeNodeIndentLine]",
      host: {
        class: "ant-tree-show-line",
        "[class.ant-tree-treenode-leaf-last]": "isLast && isLeaf"
      },
      standalone: true
    }]
  }], () => [{
    type: NzNodeBase
  }, {
    type: NzTreeView
  }, {
    type: ChangeDetectorRef
  }], null);
})();
var _NzTreeNodeNoopToggleDirective = class _NzTreeNodeNoopToggleDirective {
};
_NzTreeNodeNoopToggleDirective.ɵfac = function NzTreeNodeNoopToggleDirective_Factory(t) {
  return new (t || _NzTreeNodeNoopToggleDirective)();
};
_NzTreeNodeNoopToggleDirective.ɵdir = ɵɵdefineDirective({
  type: _NzTreeNodeNoopToggleDirective,
  selectors: [["nz-tree-node-toggle", "nzTreeNodeNoopToggle", ""], ["", "nzTreeNodeNoopToggle", ""]],
  hostAttrs: [1, "ant-tree-switcher", "ant-tree-switcher-noop"],
  standalone: true
});
var NzTreeNodeNoopToggleDirective = _NzTreeNodeNoopToggleDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTreeNodeNoopToggleDirective, [{
    type: Directive,
    args: [{
      selector: "nz-tree-node-toggle[nzTreeNodeNoopToggle], [nzTreeNodeNoopToggle]",
      host: {
        class: "ant-tree-switcher ant-tree-switcher-noop"
      },
      standalone: true
    }]
  }], null, null);
})();
var _NzTreeNodeToggleDirective = class _NzTreeNodeToggleDirective extends CdkTreeNodeToggle {
  constructor() {
    super(...arguments);
    this.recursive = false;
  }
  get isExpanded() {
    return this._treeNode.isExpanded;
  }
};
_NzTreeNodeToggleDirective.ɵfac = /* @__PURE__ */ (() => {
  let ɵNzTreeNodeToggleDirective_BaseFactory;
  return function NzTreeNodeToggleDirective_Factory(t) {
    return (ɵNzTreeNodeToggleDirective_BaseFactory || (ɵNzTreeNodeToggleDirective_BaseFactory = ɵɵgetInheritedFactory(_NzTreeNodeToggleDirective)))(t || _NzTreeNodeToggleDirective);
  };
})();
_NzTreeNodeToggleDirective.ɵdir = ɵɵdefineDirective({
  type: _NzTreeNodeToggleDirective,
  selectors: [["nz-tree-node-toggle", 3, "nzTreeNodeNoopToggle", ""], ["", "nzTreeNodeToggle", ""]],
  hostAttrs: [1, "ant-tree-switcher"],
  hostVars: 4,
  hostBindings: function NzTreeNodeToggleDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("ant-tree-switcher_open", ctx.isExpanded)("ant-tree-switcher_close", !ctx.isExpanded);
    }
  },
  inputs: {
    recursive: [InputFlags.HasDecoratorInputTransform, "nzTreeNodeToggleRecursive", "recursive", booleanAttribute]
  },
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: CdkTreeNodeToggle,
    useExisting: _NzTreeNodeToggleDirective
  }]), ɵɵInputTransformsFeature, ɵɵInheritDefinitionFeature]
});
var NzTreeNodeToggleDirective = _NzTreeNodeToggleDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTreeNodeToggleDirective, [{
    type: Directive,
    args: [{
      selector: "nz-tree-node-toggle:not([nzTreeNodeNoopToggle]), [nzTreeNodeToggle]",
      providers: [{
        provide: CdkTreeNodeToggle,
        useExisting: NzTreeNodeToggleDirective
      }],
      host: {
        class: "ant-tree-switcher",
        "[class.ant-tree-switcher_open]": "isExpanded",
        "[class.ant-tree-switcher_close]": "!isExpanded"
      },
      standalone: true
    }]
  }], null, {
    recursive: [{
      type: Input,
      args: [{
        alias: "nzTreeNodeToggleRecursive",
        transform: booleanAttribute
      }]
    }]
  });
})();
var _NzTreeNodeToggleRotateIconDirective = class _NzTreeNodeToggleRotateIconDirective {
};
_NzTreeNodeToggleRotateIconDirective.ɵfac = function NzTreeNodeToggleRotateIconDirective_Factory(t) {
  return new (t || _NzTreeNodeToggleRotateIconDirective)();
};
_NzTreeNodeToggleRotateIconDirective.ɵdir = ɵɵdefineDirective({
  type: _NzTreeNodeToggleRotateIconDirective,
  selectors: [["", "nz-icon", "", "nzTreeNodeToggleRotateIcon", ""]],
  hostAttrs: [1, "ant-tree-switcher-icon"],
  standalone: true
});
var NzTreeNodeToggleRotateIconDirective = _NzTreeNodeToggleRotateIconDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTreeNodeToggleRotateIconDirective, [{
    type: Directive,
    args: [{
      selector: "[nz-icon][nzTreeNodeToggleRotateIcon]",
      host: {
        class: "ant-tree-switcher-icon"
      },
      standalone: true
    }]
  }], null, null);
})();
var _NzTreeNodeToggleActiveIconDirective = class _NzTreeNodeToggleActiveIconDirective {
};
_NzTreeNodeToggleActiveIconDirective.ɵfac = function NzTreeNodeToggleActiveIconDirective_Factory(t) {
  return new (t || _NzTreeNodeToggleActiveIconDirective)();
};
_NzTreeNodeToggleActiveIconDirective.ɵdir = ɵɵdefineDirective({
  type: _NzTreeNodeToggleActiveIconDirective,
  selectors: [["", "nz-icon", "", "nzTreeNodeToggleActiveIcon", ""]],
  hostAttrs: [1, "ant-tree-switcher-loading-icon"],
  standalone: true
});
var NzTreeNodeToggleActiveIconDirective = _NzTreeNodeToggleActiveIconDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTreeNodeToggleActiveIconDirective, [{
    type: Directive,
    args: [{
      selector: "[nz-icon][nzTreeNodeToggleActiveIcon]",
      host: {
        class: "ant-tree-switcher-loading-icon"
      },
      standalone: true
    }]
  }], null, null);
})();
var _NzTreeNodeComponent = class _NzTreeNodeComponent extends NzNodeBase {
  constructor(elementRef, tree, renderer, cdr) {
    super(elementRef, tree);
    this.elementRef = elementRef;
    this.tree = tree;
    this.renderer = renderer;
    this.cdr = cdr;
    this.indents = [];
    this.disabled = false;
    this.selected = false;
    this.isLeaf = false;
    this._elementRef.nativeElement.classList.add("ant-tree-treenode");
  }
  ngOnInit() {
    this.isLeaf = !this.tree.treeControl.isExpandable(this.data);
  }
  disable() {
    this.disabled = true;
    this.updateDisabledClass();
  }
  enable() {
    this.disabled = false;
    this.updateDisabledClass();
  }
  select() {
    this.selected = true;
    this.updateSelectedClass();
  }
  deselect() {
    this.selected = false;
    this.updateSelectedClass();
  }
  setIndents(indents) {
    this.indents = indents;
    this.cdr.markForCheck();
  }
  updateSelectedClass() {
    if (this.selected) {
      this.renderer.addClass(this.elementRef.nativeElement, "ant-tree-treenode-selected");
    } else {
      this.renderer.removeClass(this.elementRef.nativeElement, "ant-tree-treenode-selected");
    }
  }
  updateDisabledClass() {
    if (this.disabled) {
      this.renderer.addClass(this.elementRef.nativeElement, "ant-tree-treenode-disabled");
    } else {
      this.renderer.removeClass(this.elementRef.nativeElement, "ant-tree-treenode-disabled");
    }
  }
};
_NzTreeNodeComponent.ɵfac = function NzTreeNodeComponent_Factory(t) {
  return new (t || _NzTreeNodeComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NzTreeView), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ChangeDetectorRef));
};
_NzTreeNodeComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzTreeNodeComponent,
  selectors: [["nz-tree-node", 3, "builtin", ""]],
  hostVars: 4,
  hostBindings: function NzTreeNodeComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("ant-tree-treenode-switcher-open", ctx.isExpanded)("ant-tree-treenode-switcher-close", !ctx.isExpanded);
    }
  },
  exportAs: ["nzTreeNode"],
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: CdkTreeNode,
    useExisting: _NzTreeNodeComponent
  }, {
    provide: NzNodeBase,
    useExisting: _NzTreeNodeComponent
  }]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c1,
  decls: 6,
  vars: 2,
  consts: [[3, "indents", 4, "ngIf"], ["class", "nz-tree-leaf-line-icon", "nzTreeNodeNoopToggle", "", 4, "ngIf"], [3, "indents"], ["nzTreeNodeNoopToggle", "", 1, "nz-tree-leaf-line-icon"], [1, "ant-tree-switcher-leaf-line"]],
  template: function NzTreeNodeComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef(_c0);
      ɵɵtemplate(0, NzTreeNodeComponent_nz_tree_node_indents_0_Template, 1, 1, "nz-tree-node-indents", 0);
      ɵɵprojection(1);
      ɵɵtemplate(2, NzTreeNodeComponent_nz_tree_node_toggle_2_Template, 2, 0, "nz-tree-node-toggle", 1);
      ɵɵprojection(3, 1);
      ɵɵprojection(4, 2);
      ɵɵprojection(5, 3);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.indents.length);
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.indents.length && ctx.isLeaf);
    }
  },
  dependencies: [NzTreeNodeIndentsComponent, NzTreeNodeNoopToggleDirective, NgIf],
  encapsulation: 2,
  changeDetection: 0
});
var NzTreeNodeComponent = _NzTreeNodeComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTreeNodeComponent, [{
    type: Component,
    args: [{
      selector: "nz-tree-node:not([builtin])",
      exportAs: "nzTreeNode",
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [{
        provide: CdkTreeNode,
        useExisting: NzTreeNodeComponent
      }, {
        provide: NzNodeBase,
        useExisting: NzTreeNodeComponent
      }],
      template: `
    <nz-tree-node-indents [indents]="indents" *ngIf="indents.length"></nz-tree-node-indents>
    <ng-content select="nz-tree-node-toggle, [nz-tree-node-toggle]"></ng-content>
    <nz-tree-node-toggle class="nz-tree-leaf-line-icon" *ngIf="indents.length && isLeaf" nzTreeNodeNoopToggle>
      <span class="ant-tree-switcher-leaf-line"></span>
    </nz-tree-node-toggle>
    <ng-content select="nz-tree-node-checkbox"></ng-content>
    <ng-content select="nz-tree-node-option"></ng-content>
    <ng-content></ng-content>
  `,
      host: {
        "[class.ant-tree-treenode-switcher-open]": "isExpanded",
        "[class.ant-tree-treenode-switcher-close]": "!isExpanded"
      },
      imports: [NzTreeNodeIndentsComponent, NzTreeNodeNoopToggleDirective, NgIf],
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: NzTreeView
  }, {
    type: Renderer2
  }, {
    type: ChangeDetectorRef
  }], null);
})();
var _NzTreeNodeDefDirective = class _NzTreeNodeDefDirective extends CdkTreeNodeDef {
};
_NzTreeNodeDefDirective.ɵfac = /* @__PURE__ */ (() => {
  let ɵNzTreeNodeDefDirective_BaseFactory;
  return function NzTreeNodeDefDirective_Factory(t) {
    return (ɵNzTreeNodeDefDirective_BaseFactory || (ɵNzTreeNodeDefDirective_BaseFactory = ɵɵgetInheritedFactory(_NzTreeNodeDefDirective)))(t || _NzTreeNodeDefDirective);
  };
})();
_NzTreeNodeDefDirective.ɵdir = ɵɵdefineDirective({
  type: _NzTreeNodeDefDirective,
  selectors: [["", "nzTreeNodeDef", ""]],
  inputs: {
    when: [InputFlags.None, "nzTreeNodeDefWhen", "when"]
  },
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: CdkTreeNodeDef,
    useExisting: _NzTreeNodeDefDirective
  }]), ɵɵInheritDefinitionFeature]
});
var NzTreeNodeDefDirective = _NzTreeNodeDefDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTreeNodeDefDirective, [{
    type: Directive,
    args: [{
      selector: "[nzTreeNodeDef]",
      providers: [{
        provide: CdkTreeNodeDef,
        useExisting: NzTreeNodeDefDirective
      }],
      standalone: true
    }]
  }], null, {
    when: [{
      type: Input,
      args: ["nzTreeNodeDefWhen"]
    }]
  });
})();
var _NzTreeVirtualScrollNodeOutletDirective = class _NzTreeVirtualScrollNodeOutletDirective {
  constructor(_viewContainerRef) {
    this._viewContainerRef = _viewContainerRef;
    this._viewRef = null;
  }
  ngOnChanges(changes) {
    const recreateView = this.shouldRecreateView(changes);
    if (recreateView) {
      const viewContainerRef = this._viewContainerRef;
      if (this._viewRef) {
        viewContainerRef.remove(viewContainerRef.indexOf(this._viewRef));
      }
      this._viewRef = this.data ? viewContainerRef.createEmbeddedView(this.data.nodeDef.template, this.data.context) : null;
      if (CdkTreeNode.mostRecentTreeNode && this._viewRef) {
        CdkTreeNode.mostRecentTreeNode.data = this.data.data;
      }
    } else if (this._viewRef && this.data.context) {
      this.updateExistingContext(this.data.context);
    }
  }
  shouldRecreateView(changes) {
    const ctxChange = changes.data;
    return ctxChange && this.hasContextShapeChanged(ctxChange);
  }
  hasContextShapeChanged(ctxChange) {
    const prevCtxKeys = Object.keys(ctxChange.previousValue || {});
    const currCtxKeys = Object.keys(ctxChange.currentValue || {});
    if (prevCtxKeys.length === currCtxKeys.length) {
      for (const propName of currCtxKeys) {
        if (prevCtxKeys.indexOf(propName) === -1) {
          return true;
        }
      }
      return this.innerCompareBy(ctxChange.previousValue?.data ?? null) !== this.innerCompareBy(ctxChange.currentValue?.data ?? null);
    }
    return true;
  }
  get innerCompareBy() {
    return (value) => {
      if (value === null)
        return value;
      if (this.compareBy)
        return this.compareBy(value);
      return value;
    };
  }
  updateExistingContext(ctx) {
    for (const propName of Object.keys(ctx)) {
      this._viewRef.context[propName] = this.data.context[propName];
    }
  }
};
_NzTreeVirtualScrollNodeOutletDirective.ɵfac = function NzTreeVirtualScrollNodeOutletDirective_Factory(t) {
  return new (t || _NzTreeVirtualScrollNodeOutletDirective)(ɵɵdirectiveInject(ViewContainerRef));
};
_NzTreeVirtualScrollNodeOutletDirective.ɵdir = ɵɵdefineDirective({
  type: _NzTreeVirtualScrollNodeOutletDirective,
  selectors: [["", "nzTreeVirtualScrollNodeOutlet", ""]],
  inputs: {
    data: "data",
    compareBy: "compareBy"
  },
  standalone: true,
  features: [ɵɵNgOnChangesFeature]
});
var NzTreeVirtualScrollNodeOutletDirective = _NzTreeVirtualScrollNodeOutletDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTreeVirtualScrollNodeOutletDirective, [{
    type: Directive,
    args: [{
      selector: "[nzTreeVirtualScrollNodeOutlet]",
      standalone: true
    }]
  }], () => [{
    type: ViewContainerRef
  }], {
    data: [{
      type: Input
    }],
    compareBy: [{
      type: Input
    }]
  });
})();
var _NzTreeNodeOptionComponent = class _NzTreeNodeOptionComponent {
  constructor(ngZone, host, destroy$, treeNode) {
    this.ngZone = ngZone;
    this.host = host;
    this.destroy$ = destroy$;
    this.treeNode = treeNode;
    this.nzSelected = false;
    this.nzDisabled = false;
    this.nzClick = new EventEmitter();
  }
  get isExpanded() {
    return this.treeNode.isExpanded;
  }
  ngOnChanges(changes) {
    const {
      nzDisabled,
      nzSelected
    } = changes;
    if (nzDisabled) {
      if (nzDisabled.currentValue) {
        this.treeNode.disable();
      } else {
        this.treeNode.enable();
      }
    }
    if (nzSelected) {
      if (nzSelected.currentValue) {
        this.treeNode.select();
      } else {
        this.treeNode.deselect();
      }
    }
  }
  ngOnInit() {
    this.ngZone.runOutsideAngular(() => fromEvent(this.host.nativeElement, "click").pipe(filter(() => !this.nzDisabled && this.nzClick.observers.length > 0), takeUntil(this.destroy$)).subscribe((event) => {
      this.ngZone.run(() => this.nzClick.emit(event));
    }));
  }
};
_NzTreeNodeOptionComponent.ɵfac = function NzTreeNodeOptionComponent_Factory(t) {
  return new (t || _NzTreeNodeOptionComponent)(ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NzDestroyService), ɵɵdirectiveInject(NzTreeNodeComponent));
};
_NzTreeNodeOptionComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzTreeNodeOptionComponent,
  selectors: [["nz-tree-node-option"]],
  hostAttrs: [1, "ant-tree-node-content-wrapper"],
  hostVars: 4,
  hostBindings: function NzTreeNodeOptionComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("ant-tree-node-content-wrapper-open", ctx.isExpanded)("ant-tree-node-selected", ctx.nzSelected);
    }
  },
  inputs: {
    nzSelected: "nzSelected",
    nzDisabled: "nzDisabled"
  },
  outputs: {
    nzClick: "nzClick"
  },
  standalone: true,
  features: [ɵɵProvidersFeature([NzDestroyService]), ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c2,
  decls: 2,
  vars: 0,
  consts: [[1, "ant-tree-title"]],
  template: function NzTreeNodeOptionComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "span", 0);
      ɵɵprojection(1);
      ɵɵelementEnd();
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
var NzTreeNodeOptionComponent = _NzTreeNodeOptionComponent;
__decorate([InputBoolean()], NzTreeNodeOptionComponent.prototype, "nzSelected", void 0);
__decorate([InputBoolean()], NzTreeNodeOptionComponent.prototype, "nzDisabled", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTreeNodeOptionComponent, [{
    type: Component,
    args: [{
      selector: "nz-tree-node-option",
      template: ` <span class="ant-tree-title"><ng-content></ng-content></span> `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "ant-tree-node-content-wrapper",
        "[class.ant-tree-node-content-wrapper-open]": "isExpanded",
        "[class.ant-tree-node-selected]": "nzSelected"
      },
      providers: [NzDestroyService],
      standalone: true
    }]
  }], () => [{
    type: NgZone
  }, {
    type: ElementRef
  }, {
    type: NzDestroyService
  }, {
    type: NzTreeNodeComponent
  }], {
    nzSelected: [{
      type: Input
    }],
    nzDisabled: [{
      type: Input
    }],
    nzClick: [{
      type: Output
    }]
  });
})();
var _NzTreeNodeOutletDirective = class _NzTreeNodeOutletDirective {
  constructor(viewContainer, _node) {
    this.viewContainer = viewContainer;
    this._node = _node;
  }
};
_NzTreeNodeOutletDirective.ɵfac = function NzTreeNodeOutletDirective_Factory(t) {
  return new (t || _NzTreeNodeOutletDirective)(ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(CDK_TREE_NODE_OUTLET_NODE, 8));
};
_NzTreeNodeOutletDirective.ɵdir = ɵɵdefineDirective({
  type: _NzTreeNodeOutletDirective,
  selectors: [["", "nzTreeNodeOutlet", ""]],
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: CdkTreeNodeOutlet,
    useExisting: _NzTreeNodeOutletDirective
  }])]
});
var NzTreeNodeOutletDirective = _NzTreeNodeOutletDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTreeNodeOutletDirective, [{
    type: Directive,
    args: [{
      selector: "[nzTreeNodeOutlet]",
      providers: [{
        provide: CdkTreeNodeOutlet,
        useExisting: NzTreeNodeOutletDirective
      }],
      standalone: true
    }]
  }], () => [{
    type: ViewContainerRef
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [CDK_TREE_NODE_OUTLET_NODE]
    }, {
      type: Optional
    }]
  }], null);
})();
var _NzTreeNodePaddingDirective = class _NzTreeNodePaddingDirective extends CdkTreeNodePadding {
  constructor() {
    super(...arguments);
    this._indent = 24;
  }
  get level() {
    return this._level;
  }
  set level(value) {
    this._setLevelInput(value);
  }
  get indent() {
    return this._indent;
  }
  set indent(indent) {
    this._setIndentInput(indent);
  }
};
_NzTreeNodePaddingDirective.ɵfac = /* @__PURE__ */ (() => {
  let ɵNzTreeNodePaddingDirective_BaseFactory;
  return function NzTreeNodePaddingDirective_Factory(t) {
    return (ɵNzTreeNodePaddingDirective_BaseFactory || (ɵNzTreeNodePaddingDirective_BaseFactory = ɵɵgetInheritedFactory(_NzTreeNodePaddingDirective)))(t || _NzTreeNodePaddingDirective);
  };
})();
_NzTreeNodePaddingDirective.ɵdir = ɵɵdefineDirective({
  type: _NzTreeNodePaddingDirective,
  selectors: [["", "nzTreeNodePadding", ""]],
  inputs: {
    level: [InputFlags.HasDecoratorInputTransform, "nzTreeNodePadding", "level", numberAttribute],
    indent: [InputFlags.None, "nzTreeNodePaddingIndent", "indent"]
  },
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: CdkTreeNodePadding,
    useExisting: _NzTreeNodePaddingDirective
  }]), ɵɵInputTransformsFeature, ɵɵInheritDefinitionFeature]
});
var NzTreeNodePaddingDirective = _NzTreeNodePaddingDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTreeNodePaddingDirective, [{
    type: Directive,
    args: [{
      selector: "[nzTreeNodePadding]",
      providers: [{
        provide: CdkTreeNodePadding,
        useExisting: NzTreeNodePaddingDirective
      }],
      standalone: true
    }]
  }], null, {
    level: [{
      type: Input,
      args: [{
        alias: "nzTreeNodePadding",
        transform: numberAttribute
      }]
    }],
    indent: [{
      type: Input,
      args: ["nzTreeNodePaddingIndent"]
    }]
  });
})();
var _NzTreeViewComponent = class _NzTreeViewComponent extends NzTreeView {
  constructor() {
    super(...arguments);
    this._afterViewInit = false;
  }
  ngAfterViewInit() {
    Promise.resolve().then(() => {
      this._afterViewInit = true;
      this.changeDetectorRef.markForCheck();
    });
  }
};
_NzTreeViewComponent.ɵfac = /* @__PURE__ */ (() => {
  let ɵNzTreeViewComponent_BaseFactory;
  return function NzTreeViewComponent_Factory(t) {
    return (ɵNzTreeViewComponent_BaseFactory || (ɵNzTreeViewComponent_BaseFactory = ɵɵgetInheritedFactory(_NzTreeViewComponent)))(t || _NzTreeViewComponent);
  };
})();
_NzTreeViewComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzTreeViewComponent,
  selectors: [["nz-tree-view"]],
  viewQuery: function NzTreeViewComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(NzTreeNodeOutletDirective, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.nodeOutlet = _t.first);
    }
  },
  hostAttrs: [1, "ant-tree"],
  hostVars: 6,
  hostBindings: function NzTreeViewComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("ant-tree-block-node", ctx.nzDirectoryTree || ctx.nzBlockNode)("ant-tree-directory", ctx.nzDirectoryTree)("ant-tree-rtl", ctx.dir === "rtl");
    }
  },
  exportAs: ["nzTreeView"],
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: CdkTree,
    useExisting: _NzTreeViewComponent
  }, {
    provide: NzTreeView,
    useExisting: _NzTreeViewComponent
  }]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  decls: 3,
  vars: 2,
  consts: [[1, "ant-tree-list-holder"], [1, "ant-tree-list-holder-inner"], ["nzTreeNodeOutlet", ""]],
  template: function NzTreeViewComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0)(1, "div", 1);
      ɵɵelementContainer(2, 2);
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵproperty("@.disabled", !ctx._afterViewInit || !!(ctx.noAnimation == null ? null : ctx.noAnimation.nzNoAnimation))("@treeCollapseMotion", ctx._nodeOutlet.viewContainer.length);
    }
  },
  dependencies: [NzTreeNodeOutletDirective],
  encapsulation: 2,
  data: {
    animation: [treeCollapseMotion]
  },
  changeDetection: 0
});
var NzTreeViewComponent = _NzTreeViewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTreeViewComponent, [{
    type: Component,
    args: [{
      selector: "nz-tree-view",
      exportAs: "nzTreeView",
      template: `
    <div class="ant-tree-list-holder">
      <div
        [@.disabled]="!_afterViewInit || !!noAnimation?.nzNoAnimation"
        [@treeCollapseMotion]="_nodeOutlet.viewContainer.length"
        class="ant-tree-list-holder-inner"
      >
        <ng-container nzTreeNodeOutlet></ng-container>
      </div>
    </div>
  `,
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [{
        provide: CdkTree,
        useExisting: NzTreeViewComponent
      }, {
        provide: NzTreeView,
        useExisting: NzTreeViewComponent
      }],
      host: {
        class: "ant-tree",
        "[class.ant-tree-block-node]": "nzDirectoryTree || nzBlockNode",
        "[class.ant-tree-directory]": "nzDirectoryTree",
        "[class.ant-tree-rtl]": `dir === 'rtl'`
      },
      animations: [treeCollapseMotion],
      imports: [NzTreeNodeOutletDirective],
      standalone: true
    }]
  }], null, {
    nodeOutlet: [{
      type: ViewChild,
      args: [NzTreeNodeOutletDirective, {
        static: true
      }]
    }]
  });
})();
var DEFAULT_SIZE = 28;
var _NzTreeVirtualScrollViewComponent = class _NzTreeVirtualScrollViewComponent extends NzTreeView {
  constructor() {
    super(...arguments);
    this.nzItemSize = DEFAULT_SIZE;
    this.nzMinBufferPx = DEFAULT_SIZE * 5;
    this.nzMaxBufferPx = DEFAULT_SIZE * 10;
    this.nodes = [];
    this.innerTrackBy = (i) => i;
  }
  ngOnChanges(changes) {
    if (changes.trackBy) {
      if (typeof changes.trackBy.currentValue === "function") {
        this.innerTrackBy = (index, n) => this.trackBy(index, n.data);
      } else {
        this.innerTrackBy = (i) => i;
      }
    }
  }
  get compareBy() {
    const baseTreeControl = this.treeControl;
    if (baseTreeControl.trackBy) {
      return baseTreeControl.trackBy;
    }
    return null;
  }
  renderNodeChanges(data) {
    this.nodes = new Array(...data).map((n, i) => this.createNode(n, i));
    this._dataSourceChanged.next();
    this.changeDetectorRef.markForCheck();
  }
  createNode(nodeData, index) {
    const node = this._getNodeDef(nodeData, index);
    const context = new CdkTreeNodeOutletContext(nodeData);
    if (this.treeControl.getLevel) {
      context.level = this.treeControl.getLevel(nodeData);
    } else {
      context.level = 0;
    }
    return {
      data: nodeData,
      context,
      nodeDef: node
    };
  }
};
_NzTreeVirtualScrollViewComponent.ɵfac = /* @__PURE__ */ (() => {
  let ɵNzTreeVirtualScrollViewComponent_BaseFactory;
  return function NzTreeVirtualScrollViewComponent_Factory(t) {
    return (ɵNzTreeVirtualScrollViewComponent_BaseFactory || (ɵNzTreeVirtualScrollViewComponent_BaseFactory = ɵɵgetInheritedFactory(_NzTreeVirtualScrollViewComponent)))(t || _NzTreeVirtualScrollViewComponent);
  };
})();
_NzTreeVirtualScrollViewComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzTreeVirtualScrollViewComponent,
  selectors: [["nz-tree-virtual-scroll-view"]],
  viewQuery: function NzTreeVirtualScrollViewComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(NzTreeNodeOutletDirective, 7);
      ɵɵviewQuery(CdkVirtualScrollViewport, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.nodeOutlet = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.virtualScrollViewport = _t.first);
    }
  },
  hostAttrs: [1, "ant-tree"],
  hostVars: 6,
  hostBindings: function NzTreeVirtualScrollViewComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("ant-tree-block-node", ctx.nzDirectoryTree || ctx.nzBlockNode)("ant-tree-directory", ctx.nzDirectoryTree)("ant-tree-rtl", ctx.dir === "rtl");
    }
  },
  inputs: {
    nzItemSize: "nzItemSize",
    nzMinBufferPx: "nzMinBufferPx",
    nzMaxBufferPx: "nzMaxBufferPx",
    trackBy: "trackBy"
  },
  exportAs: ["nzTreeVirtualScrollView"],
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: NzTreeView,
    useExisting: _NzTreeVirtualScrollViewComponent
  }, {
    provide: CdkTree,
    useExisting: _NzTreeVirtualScrollViewComponent
  }]), ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  decls: 4,
  vars: 5,
  consts: [[1, "ant-tree-list"], [1, "ant-tree-list-holder", 3, "itemSize", "minBufferPx", "maxBufferPx"], [4, "cdkVirtualFor", "cdkVirtualForOf", "cdkVirtualForTrackBy"], ["nzTreeNodeOutlet", ""], ["nzTreeVirtualScrollNodeOutlet", "", 3, "data", "compareBy"]],
  template: function NzTreeVirtualScrollViewComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0)(1, "cdk-virtual-scroll-viewport", 1);
      ɵɵtemplate(2, NzTreeVirtualScrollViewComponent_ng_container_2_Template, 2, 2, "ng-container", 2);
      ɵɵelementEnd()();
      ɵɵelementContainer(3, 3);
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵproperty("itemSize", ctx.nzItemSize)("minBufferPx", ctx.nzMinBufferPx)("maxBufferPx", ctx.nzMaxBufferPx);
      ɵɵadvance();
      ɵɵproperty("cdkVirtualForOf", ctx.nodes)("cdkVirtualForTrackBy", ctx.innerTrackBy);
    }
  },
  dependencies: [NzTreeVirtualScrollNodeOutletDirective, CdkVirtualForOf, NzTreeNodeOutletDirective, CdkVirtualScrollViewport, CdkFixedSizeVirtualScroll],
  encapsulation: 2,
  changeDetection: 0
});
var NzTreeVirtualScrollViewComponent = _NzTreeVirtualScrollViewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTreeVirtualScrollViewComponent, [{
    type: Component,
    args: [{
      selector: "nz-tree-virtual-scroll-view",
      exportAs: "nzTreeVirtualScrollView",
      template: `
    <div class="ant-tree-list">
      <cdk-virtual-scroll-viewport
        class="ant-tree-list-holder"
        [itemSize]="nzItemSize"
        [minBufferPx]="nzMinBufferPx"
        [maxBufferPx]="nzMaxBufferPx"
      >
        <ng-container *cdkVirtualFor="let item of nodes; let i = index; trackBy: innerTrackBy">
          <ng-template nzTreeVirtualScrollNodeOutlet [data]="item" [compareBy]="compareBy"></ng-template>
        </ng-container>
      </cdk-virtual-scroll-viewport>
    </div>
    <ng-container nzTreeNodeOutlet></ng-container>
  `,
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [{
        provide: NzTreeView,
        useExisting: NzTreeVirtualScrollViewComponent
      }, {
        provide: CdkTree,
        useExisting: NzTreeVirtualScrollViewComponent
      }],
      host: {
        class: "ant-tree",
        "[class.ant-tree-block-node]": "nzDirectoryTree || nzBlockNode",
        "[class.ant-tree-directory]": "nzDirectoryTree",
        "[class.ant-tree-rtl]": `dir === 'rtl'`
      },
      imports: [NzTreeVirtualScrollNodeOutletDirective, CdkVirtualForOf, NzTreeNodeOutletDirective, CdkVirtualScrollViewport, CdkFixedSizeVirtualScroll],
      standalone: true
    }]
  }], null, {
    nodeOutlet: [{
      type: ViewChild,
      args: [NzTreeNodeOutletDirective, {
        static: true
      }]
    }],
    virtualScrollViewport: [{
      type: ViewChild,
      args: [CdkVirtualScrollViewport, {
        static: true
      }]
    }],
    nzItemSize: [{
      type: Input
    }],
    nzMinBufferPx: [{
      type: Input
    }],
    nzMaxBufferPx: [{
      type: Input
    }],
    trackBy: [{
      type: Input
    }]
  });
})();
var treeWithControlComponents = [NzTreeView, NzTreeNodeOutletDirective, NzTreeViewComponent, NzTreeNodeDefDirective, NzTreeNodeComponent, NzTreeNodeToggleDirective, NzTreeNodePaddingDirective, NzTreeNodeToggleRotateIconDirective, NzTreeNodeToggleActiveIconDirective, NzTreeNodeOptionComponent, NzTreeNodeNoopToggleDirective, NzTreeNodeCheckboxComponent, NzTreeNodeIndentsComponent, NzTreeVirtualScrollViewComponent, NzTreeVirtualScrollNodeOutletDirective, NzTreeNodeIndentLineDirective];
var _NzTreeViewModule = class _NzTreeViewModule {
};
_NzTreeViewModule.ɵfac = function NzTreeViewModule_Factory(t) {
  return new (t || _NzTreeViewModule)();
};
_NzTreeViewModule.ɵmod = ɵɵdefineNgModule({
  type: _NzTreeViewModule,
  imports: [NzTreeView, NzTreeNodeOutletDirective, NzTreeViewComponent, NzTreeNodeDefDirective, NzTreeNodeComponent, NzTreeNodeToggleDirective, NzTreeNodePaddingDirective, NzTreeNodeToggleRotateIconDirective, NzTreeNodeToggleActiveIconDirective, NzTreeNodeOptionComponent, NzTreeNodeNoopToggleDirective, NzTreeNodeCheckboxComponent, NzTreeNodeIndentsComponent, NzTreeVirtualScrollViewComponent, NzTreeVirtualScrollNodeOutletDirective, NzTreeNodeIndentLineDirective],
  exports: [NzTreeView, NzTreeNodeOutletDirective, NzTreeViewComponent, NzTreeNodeDefDirective, NzTreeNodeComponent, NzTreeNodeToggleDirective, NzTreeNodePaddingDirective, NzTreeNodeToggleRotateIconDirective, NzTreeNodeToggleActiveIconDirective, NzTreeNodeOptionComponent, NzTreeNodeNoopToggleDirective, NzTreeNodeCheckboxComponent, NzTreeNodeIndentsComponent, NzTreeVirtualScrollViewComponent, NzTreeVirtualScrollNodeOutletDirective, NzTreeNodeIndentLineDirective]
});
_NzTreeViewModule.ɵinj = ɵɵdefineInjector({
  imports: [NzTreeVirtualScrollViewComponent]
});
var NzTreeViewModule = _NzTreeViewModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTreeViewModule, [{
    type: NgModule,
    args: [{
      imports: [treeWithControlComponents],
      exports: [treeWithControlComponents]
    }]
  }], null, null);
})();
var NzTreeFlattener = class {
  constructor(transformFunction, getLevel, isExpandable, getChildren) {
    this.transformFunction = transformFunction;
    this.getLevel = getLevel;
    this.isExpandable = isExpandable;
    this.getChildren = getChildren;
  }
  flattenNode(node, level, resultNodes, parentMap) {
    const flatNode = this.transformFunction(node, level);
    resultNodes.push(flatNode);
    if (this.isExpandable(flatNode)) {
      const childrenNodes = this.getChildren(node);
      if (childrenNodes) {
        if (Array.isArray(childrenNodes)) {
          this.flattenChildren(childrenNodes, level, resultNodes, parentMap);
        } else {
          childrenNodes.pipe(take(1)).subscribe((children) => {
            this.flattenChildren(children, level, resultNodes, parentMap);
          });
        }
      }
    }
    return resultNodes;
  }
  flattenChildren(children, level, resultNodes, parentMap) {
    children.forEach((child, index) => {
      const childParentMap = parentMap.slice();
      childParentMap.push(index !== children.length - 1);
      this.flattenNode(child, level + 1, resultNodes, childParentMap);
    });
  }
  /**
   * Flatten a list of node type T to flattened version of node F.
   * Please note that type T may be nested, and the length of `structuredData` may be different
   * from that of returned list `F[]`.
   */
  flattenNodes(structuredData) {
    const resultNodes = [];
    structuredData.forEach((node) => this.flattenNode(node, 0, resultNodes, []));
    return resultNodes;
  }
  /**
   * Expand flattened node with current expansion status.
   * The returned list may have different length.
   */
  expandFlattenedNodes(nodes, treeControl) {
    const results = [];
    const currentExpand = [];
    currentExpand[0] = true;
    nodes.forEach((node) => {
      let expand = true;
      for (let i = 0; i <= this.getLevel(node); i++) {
        expand = expand && currentExpand[i];
      }
      if (expand) {
        results.push(node);
      }
      if (this.isExpandable(node)) {
        currentExpand[this.getLevel(node) + 1] = treeControl.isExpanded(node);
      }
    });
    return results;
  }
};
var NzTreeFlatDataSource = class extends DataSource {
  constructor(_treeControl, _treeFlattener, initialData = []) {
    super();
    this._treeControl = _treeControl;
    this._treeFlattener = _treeFlattener;
    this._flattenedData = new BehaviorSubject([]);
    this._expandedData = new BehaviorSubject([]);
    this._data = new BehaviorSubject(initialData);
    this.flatNodes();
  }
  setData(value) {
    this._data.next(value);
    this.flatNodes();
  }
  getData() {
    return this._data.getValue();
  }
  connect(collectionViewer) {
    const changes = [collectionViewer.viewChange, this._treeControl.expansionModel.changed.asObservable(), this._flattenedData.asObservable()];
    return merge(...changes).pipe(map(() => {
      this._expandedData.next(this._treeFlattener.expandFlattenedNodes(this._flattenedData.value, this._treeControl));
      return this._expandedData.value;
    }));
  }
  disconnect() {
  }
  flatNodes() {
    this._flattenedData.next(this._treeFlattener.flattenNodes(this.getData()));
    this._treeControl.dataNodes = this._flattenedData.value;
  }
};
export {
  NzTreeFlatDataSource,
  NzTreeFlattener,
  NzTreeNodeCheckboxComponent,
  NzTreeNodeComponent,
  NzTreeNodeDefDirective,
  NzTreeNodeIndentLineDirective,
  NzTreeNodeIndentsComponent,
  NzTreeNodeNoopToggleDirective,
  NzTreeNodeOptionComponent,
  NzTreeNodeOutletDirective,
  NzTreeNodePaddingDirective,
  NzTreeNodeToggleActiveIconDirective,
  NzTreeNodeToggleDirective,
  NzTreeNodeToggleRotateIconDirective,
  NzTreeView,
  NzTreeViewComponent,
  NzTreeViewModule,
  NzTreeVirtualScrollNodeOutletDirective,
  NzTreeVirtualScrollViewComponent,
  getNextSibling,
  getParent
};
//# sourceMappingURL=ng-zorro-antd_tree-view.js.map
