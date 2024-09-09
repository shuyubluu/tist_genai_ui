(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 常數設定
 * @author sungyeh
 */
class DiagramConstant {
}
exports.DiagramConstant = DiagramConstant;
/**
 *一般關聯常數
 *
 * @static
 * @type {TistNormalLinkInterface}
 * @memberof DiagramConstant
 */
DiagramConstant.NORMAL_LINK_PARAM = {
    sourceLink: '',
    tistType: 'normal-link',
    tistOrder: 1,
    isAdopt: false,
    attrs: {
        line: {
            stroke: 'grey',
            targetMarker: {
                type: 'none'
            }
        }
    },
    disabledInteractive: true
};
/**
 *透明線常數
 *
 * @static
 * @type {TistNormalLinkInterface}
 * @memberof DiagramConstant
 */
DiagramConstant.MASK_LINK_PARAM = {
    attrs: {
        line: {
            stroke: 'rgba(165,165,165,0)',
            targetMarker: {
                type: 'none'
            }
        }
    }
};
/**
 *和諧常數
 *
 * @static
 * @type {TistNormalLinkInterface}
 * @memberof DiagramConstant
 */
DiagramConstant.HARMONIOUS_LINK_PARAM = {
    tistType: 'harmonious-link',
    tistOrder: 1,
    attrs: {
        line: {
            stroke: 'green',
            targetMarker: {
                type: 'none'
            }
        }
    }
};
/**
 *依屬關係輕微常數
 *
 * @static
 * @type {TistNormalLinkInterface}
 * @memberof DiagramConstant
 */
DiagramConstant.LOW_DEPENDENT_LINK_PARAM = {
    sourceLink: '',
    tistType: 'low-dependent-link',
    tistOrder: 1,
    attrs: {
        line: {
            stroke: 'cornflowerblue',
            targetMarker: {
                type: 'none'
            }
        }
    }
};
/**
 *親密常數
 *
 * @static
 * @type {TistTripleLinkInterface}
 * @memberof DiagramConstant
 */
DiagramConstant.DOUBLE_LINK_PARAM = {
    tistType: 'double-link',
    tistOrder: 1,
    attrs: {
        line: {
            stroke: 'none',
            strokeWidth: 2.5,
            targetMarker: {
                type: 'none'
            }
        },
        outline: {
            attrs: {
                line: {
                    stroke: 'green',
                    strokeWidth: 2.5,
                    targetMarker: {
                        type: 'none'
                    }
                }
            },
            disabledInteractive: true
        }
    }
};
/**
 *依屬關係普通常數
 *
 * @static
 * @type {TistTripleLinkInterface}
 * @memberof DiagramConstant
 */
DiagramConstant.MEDIUM_DEPENDENT_LINK_PARAM = {
    tistType: 'medium-dependent-link',
    tistOrder: 1,
    attrs: {
        line: {
            stroke: 'none',
            strokeWidth: 2.5,
            targetMarker: {
                type: 'none'
            }
        },
        outline: {
            attrs: {
                line: {
                    stroke: 'cornflowerblue',
                    strokeWidth: 2.5,
                    targetMarker: {
                        type: 'none'
                    }
                }
            },
            disabledInteractive: true
        }
    }
};
/**
 *非常親密常數
 *
 * @static
 * @type {TistTripleLinkInterface}
 * @memberof DiagramConstant
 */
DiagramConstant.TRIPLE_LINK_PARAM = {
    tistType: 'triple-link',
    tistOrder: 1,
    attrs: {
        line: {
            stroke: 'green',
            strokeWidth: 2.5,
            targetMarker: {
                type: 'none'
            }
        },
        outline: {
            attrs: {
                line: {
                    stroke: 'green',
                    strokeWidth: 2.5,
                    targetMarker: {
                        type: 'none'
                    }
                }
            },
            disabledInteractive: true
        }
    }
};
/**
 *依屬關係強烈常數
 *
 * @static
 * @type {TistTripleLinkInterface}
 * @memberof DiagramConstant
 */
DiagramConstant.HIGH_DEPENDENT_LINK_PARAM = {
    tistType: 'high-dependent-link',
    tistOrder: 1,
    attrs: {
        line: {
            stroke: 'cornflowerblue',
            strokeWidth: 2.5,
            targetMarker: {
                type: 'none'
            }
        },
        outline: {
            attrs: {
                line: {
                    stroke: 'cornflowerblue',
                    strokeWidth: 2.5,
                    targetMarker: {
                        type: 'none'
                    }
                }
            },
            disabledInteractive: true
        }
    }
};
/**
 *疏離常數
 *
 * @static
 * @type {TistNormalLinkInterface}
 * @memberof DiagramConstant
 */
DiagramConstant.DASH_LINK_PARAM = {
    sourceLink: '',
    tistType: 'dash-link',
    tistOrder: 1,
    attrs: {
        line: {
            stroke: 'green',
            strokeDasharray: '5 5',
            targetMarker: {
                type: 'none'
            }
        }
    }
};
/**
 *不合常數
 *
 * @static
 * @type {TistTripleLinkInterface}
 * @memberof DiagramConstant
 */
DiagramConstant.DOUBLE_DASH_LINK_PARAM = {
    tistType: 'double-dash-link',
    tistOrder: 1,
    attrs: {
        line: {
            stroke: 'none',
            strokeWidth: 2.5,
            targetMarker: {
                type: 'none'
            }
        },
        outline: {
            attrs: {
                line: {
                    stroke: 'green',
                    strokeDasharray: '5 5',
                    strokeWidth: 2.5,
                    targetMarker: {
                        type: 'none'
                    }
                }
            },
            disabledInteractive: true
        }
    }
};
/**
 *仇恨常數
 *
 * @static
 * @type {TistTripleLinkInterface}
 * @memberof DiagramConstant
 */
DiagramConstant.TRIPLE_DASH_LINK_PARAM = {
    tistType: 'triple-dash-link',
    tistOrder: 1,
    attrs: {
        line: {
            stroke: 'green',
            strokeWidth: 2.5,
            strokeDasharray: '5 5',
            targetMarker: {
                type: 'none'
            }
        },
        outline: {
            attrs: {
                line: {
                    stroke: 'green',
                    strokeDasharray: '5 5',
                    strokeWidth: 2.5,
                    targetMarker: {
                        type: 'none'
                    }
                }
            },
            disabledInteractive: true
        }
    }
};
/**
 *互不往來常數
 *
 * @static
 * @type {CustomLinkInterface}
 * @memberof DiagramConstant
 */
DiagramConstant.DOUBLE_VERTICAL_LINK_PARAM = {
    tistType: 'double-vertical-link',
    tistOrder: 1,
    disabledInteractive: true,
    attrs: {
        line: {
            stroke: 'green',
            strokeWidth: 2,
            targetMarker: {
                'type': 'none'
            },
            strokeDasharray: '5 5'
        }
    },
    labels: [
        {
            attrs: {
                label: {
                    text: '  '
                }
            }
        }
    ],
    defaultLabel: {
        markup: [
            {
                tagName: 'path',
                selector: 'symbol'
            },
            {
                tagName: 'path',
                selector: 'symbol1'
            }
        ],
        attrs: {
            symbol: {
                d: 'M -5 -10 -5 10',
                stroke: 'green',
                fill: 'none',
                strokeWidth: 2,
                class: 'diagram-icon'
            },
            symbol1: {
                d: 'M 5 10 5 -10',
                stroke: 'green',
                fill: 'none',
                strokeWidth: 2,
                class: 'diagram-icon'
            }
        }
    }
};
/**
 *衝突常數
 *
 * @static
 * @type {CustomLinkInterface}
 * @memberof DiagramConstant
 */
DiagramConstant.PULSE_LINK_PARAM = {
    tistType: 'pulse-link',
    tistOrder: 1,
    disabledInteractive: true,
    attrs: {
        line: {
            stroke: 'red',
            strokeWidth: 2,
            targetMarker: {
                type: 'none'
            }
        }
    },
    labels: [
        {
            attrs: {
                label: {
                    text: '  '
                }
            }
        }
    ],
    defaultLabel: {
        markup: [
            {
                tagName: 'path',
                selector: 'symbol'
            }
        ],
        attrs: {
            symbol: {
                d: 'M -15 0 -7.5 -15 7.5 15 15 0',
                stroke: 'red',
                fill: 'none',
                strokeWidth: 2,
                class: 'diagram-icon'
            }
        }
    }
};
/**
 *互斥常數
 *
 * @static
 * @type {CustomLinkInterface}
 * @memberof DiagramConstant
 */
DiagramConstant.EXCLUSION_LINK_PARAM = {
    tistType: 'exclusion-link',
    tistOrder: 1,
    disabledInteractive: true,
    attrs: {
        line: {
            stroke: 'cornflowerblue',
            strokeWidth: 2,
            targetMarker: {
                'type': 'none'
            }
        }
    },
    labels: [
        {
            attrs: {
                label: {
                    text: '  '
                }
            }
        }
    ],
    defaultLabel: {
        markup: [
            {
                tagName: 'path',
                selector: 'symbol'
            }
        ],
        attrs: {
            symbol: {
                d: 'M -15 0 -7.5 -15 7.5 15 15 0',
                stroke: 'cornflowerblue',
                fill: 'none',
                strokeWidth: 2,
                class: 'diagram-icon'
            }
        }
    }
};
/**
 *又愛又恨常數
 *
 * @static
 * @type {CustomLinkInterface}
 * @memberof DiagramConstant
 */
DiagramConstant.DOUBLE_PULSE_LINK_PARAM = {
    tistType: 'double-pulse-link',
    tistOrder: 1,
    disabledInteractive: true,
    attrs: {
        line: {
            stroke: 'red',
            strokeWidth: 2,
            targetMarker: {
                'type': 'none'
            }
        }
    },
    labels: [
        {
            attrs: {
                label: {
                    text: '  '
                }
            }
        }
    ],
    defaultLabel: {
        markup: [
            {
                tagName: 'path',
                selector: 'symbol'
            }
        ],
        attrs: {
            symbol: {
                d: 'M -45 0 -37.5 -15 -22.5 15 -15 0 15 0 22.5 -15 37.5 15 45 0',
                stroke: 'red',
                fill: 'none',
                strokeWidth: 2,
                class: 'diagram-icon'
            }
        }
    }
};
/**
 *暴力常數
 *
 * @static
 * @type {CustomLinkInterface}
 * @memberof DiagramConstant
 */
DiagramConstant.DOUBLE_LINE_PULSE_LINK_PARAM = {
    tistType: 'double-line-pulse-link',
    tistOrder: 1,
    disabledInteractive: true,
    attrs: {
        line: {
            stroke: 'red',
            strokeWidth: 2,
            targetMarker: {
                'type': 'none'
            }
        },
        subLine: {
            attrs: {
                line: {
                    stroke: 'none',
                    strokeWidth: 2.5,
                    targetMarker: {
                        type: 'none'
                    }
                },
                outline: {
                    attrs: {
                        line: {
                            stroke: 'black',
                            strokeWidth: 2.5,
                            targetMarker: {
                                type: 'none'
                            }
                        }
                    },
                    disabledInteractive: true
                }
            }
        }
    },
    labels: [
        {
            attrs: {
                label: {
                    text: '  '
                }
            }
        }
    ],
    defaultLabel: {
        markup: [
            {
                tagName: 'path',
                selector: 'symbol'
            }
        ],
        attrs: {
            symbol: {
                d: 'M -15 0 -7.5 -15 7.5 15 15 0',
                stroke: 'red',
                fill: 'none',
                strokeWidth: 2,
                class: 'diagram-icon'
            }
        }
    }
};
/**
 *親密又暴力常數
 *
 * @static
 * @type {CustomLinkInterface}
 * @memberof DiagramConstant
 */
DiagramConstant.BOUNDARY_DOUBLE_PULSE_LINK_PARAM = {
    tistType: 'boundary-double-pulse-link',
    tistOrder: 1,
    attrs: {
        line: {
            stroke: 'red',
            strokeWidth: 2,
            targetMarker: {
                'type': 'none'
            }
        },
        subLine: {
            attrs: {
                line: {
                    stroke: 'none',
                    strokeWidth: 2.5,
                    targetMarker: {
                        type: 'none'
                    }
                },
                outline: {
                    attrs: {
                        line: {
                            stroke: 'black',
                            strokeWidth: 2.5,
                            targetMarker: {
                                type: 'none'
                            }
                        }
                    },
                    disabledInteractive: true
                }
            }
        }
    },
    labels: [
        {
            attrs: {
                label: {
                    text: '  '
                }
            }
        }
    ],
    defaultLabel: {
        markup: [
            {
                tagName: 'path',
                selector: 'symbol'
            }
        ],
        attrs: {
            symbol: {
                d: 'M -45 0 -37.5 -15 -22.5 15 -15 0 15 0 22.5 -15 37.5 15 45 0',
                stroke: 'red',
                fill: 'none',
                strokeWidth: 2,
                class: 'diagram-icon'
            }
        }
    }
};
/**
 *性侵害常數
 *
 * @static
 * @type {CustomLinkInterface}
 * @memberof DiagramConstant
 */
DiagramConstant.QUADRUPLE_PULSE_LINK_PARAM = {
    tistType: 'quadruple-pulse-link',
    tistOrder: 1,
    disabledInteractive: true,
    attrs: {
        line: {
            stroke: 'red',
            strokeWidth: 0,
            targetMarker: {
                type: 'none'
            }
        },
        subLine: {
            attrs: {
                line: {
                    stroke: 'none',
                    strokeWidth: 2.5,
                    targetMarker: {
                        type: 'none'
                    }
                },
                outline: {
                    attrs: {
                        line: {
                            stroke: 'cornflowerblue',
                            strokeWidth: 2.5,
                            targetMarker: {
                                type: 'none'
                            }
                        }
                    },
                    disabledInteractive: true
                }
            }
        }
    },
    labels: [
        {
            attrs: {
                label: {
                    text: '  '
                }
            }
        }
    ],
    defaultLabel: {
        markup: [
            {
                tagName: 'text',
                selector: 'label'
            },
            {
                tagName: 'path',
                selector: 'symbol'
            },
            {
                tagName: 'path',
                selector: 'symbol1'
            }
        ],
        attrs: {
            label: {
                textAnchor: 'middle',
                yAlignment: 'middle'
            },
            symbol: {
                d: 'M -45 -6 -37.5 -21 -22.5 9 -15 -6 15 -6 22.5 -21 37.5 9 45 -6',
                stroke: 'cornflowerblue',
                fill: 'none',
                strokeWidth: 2,
                class: 'diagram-icon'
            },
            symbol1: {
                d: 'M -45 6 -37.5 -9 -22.5 21 -15 6 15 6 22.5 -9 37.5 21 45 6',
                stroke: 'cornflowerblue',
                fill: 'none',
                strokeWidth: 2,
                class: 'diagram-icon'
            }
        }
    }
};
/**
 *愛慕常數
 *
 * @static
 * @type {CustomLinkInterface}
 * @memberof DiagramConstant
 */
DiagramConstant.CIRCLE_LINK_PARAM = {
    tistType: 'circle-link',
    tistOrder: 1,
    disabledInteractive: true,
    attrs: {
        line: {
            stroke: 'green',
            strokeWidth: 2,
            targetMarker: {
                'type': 'none'
            }
        }
    },
    labels: [
        {
            attrs: {
                label: {
                    text: '     '
                }
            }
        }
    ],
    defaultLabel: {
        markup: [
            {
                tagName: 'text',
                selector: 'label'
            },
            {
                tagName: 'circle',
                selector: 'circle'
            }
        ],
        attrs: {
            label: {
                textAnchor: 'middle',
                yAlignment: 'middle'
            },
            circle: {
                ref: 'label',
                fill: 'rgba(255, 255, 255, 0)',
                stroke: 'green',
                strokeWidth: 2,
                refR: 1
            }
        }
    }
};
/**
 *戀愛常數
 *
 * @static
 * @type {CustomLinkInterface}
 * @memberof DiagramConstant
 */
DiagramConstant.DOUBLE_CIRCLE_LINK_PARAM = {
    tistType: 'double-circle-link',
    tistOrder: 1,
    disabledInteractive: true,
    attrs: {
        line: {
            stroke: 'green',
            strokeWidth: 2,
            targetMarker: {
                'type': 'none'
            }
        }
    },
    labels: [
        {
            attrs: {
                label: {
                    text: '     '
                }
            }
        }
    ],
    defaultLabel: {
        markup: [
            {
                tagName: 'text',
                selector: 'label'
            },
            {
                tagName: 'circle',
                selector: 'circle'
            }, {
                tagName: 'circle',
                selector: 'circle1'
            }
        ],
        attrs: {
            label: {
                textAnchor: 'middle',
                yAlignment: 'middle'
            },
            circle: {
                ref: 'label',
                fill: 'rgba(255, 255, 255, 0)',
                stroke: 'green',
                strokeWidth: 2,
                refR: 1,
                refX: 15
            },
            circle1: {
                ref: 'label',
                fill: 'rgba(255, 255, 255, 0)',
                stroke: 'green',
                strokeWidth: 2,
                refR: 1,
                refX: -5
            }
        }
    }
};
/**
* 同居常數
* double-rex-link
* @static
* @type {CustomLinkInterface}
* @memberof DiagramConstant
*/
DiagramConstant.REX_LINK_PARAM = {
    tistType: 'rex-link',
    tistOrder: 2,
    disabledInteractive: true,
    attrs: {
        line: {
            stroke: '#FF4D00',
            strokeWidth: 2,
            targetMarker: {
                'type': 'none'
            },
            strokeDasharray: '5 5'
        }
    }
};
/**
 *分居常數
 *
 * @static
 * @type {CustomLinkInterface}
 * @memberof DiagramConstant
 */
DiagramConstant.SLASH_LINK_PARAM = {
    tistType: 'slash-link',
    tistOrder: 2,
    disabledInteractive: true,
    attrs: {
        line: {
            stroke: 'red',
            strokeWidth: 2,
            targetMarker: {
                'type': 'none'
            }
        }
    },
    labels: [
        {
            attrs: {
                label: {
                    text: '  '
                }
            }
        }
    ],
    defaultLabel: {
        markup: [
            {
                tagName: 'path',
                selector: 'symbol'
            }
        ],
        attrs: {
            symbol: {
                d: 'M -10 10 10 -10',
                stroke: 'red',
                fill: 'none',
                strokeWidth: 2,
                class: 'diagram-icon'
            }
        }
    }
};
/**
 *離婚常數
 *
 * @static
 * @type {CustomLinkInterface}
 * @memberof DiagramConstant
 */
DiagramConstant.DOUBLE_SLASH_LINK_PARAM = {
    tistType: 'double-slash-link',
    tistOrder: 2,
    disabledInteractive: true,
    attrs: {
        line: {
            stroke: 'red',
            strokeWidth: 2,
            targetMarker: {
                'type': 'none'
            }
        }
    },
    labels: [
        {
            attrs: {
                label: {
                    text: '  '
                }
            }
        }
    ],
    defaultLabel: {
        markup: [
            {
                tagName: 'path',
                selector: 'symbol'
            },
            {
                tagName: 'path',
                selector: 'symbol2'
            }
        ],
        attrs: {
            symbol: {
                d: 'M -15 10 5 -10',
                stroke: 'red',
                fill: 'none',
                strokeWidth: 2,
                class: 'diagram-icon'
            },
            symbol2: {
                d: 'M -25 10 -5 -10',
                stroke: 'red',
                fill: 'none',
                strokeWidth: 2,
                class: 'diagram-icon'
            }
        }
    }
};
/**
 *曾經同居常數
 *
 * @static
 * @type {CustomLinkInterface}
 * @memberof DiagramConstant
 */
DiagramConstant.BACK_SLASH_LINK_PARAM = {
    tistType: 'back-slash-link',
    tistOrder: 2,
    disabledInteractive: true,
    attrs: {
        line: {
            stroke: 'cornflowerblue',
            strokeWidth: 2,
            targetMarker: {
                'type': 'none'
            },
            strokeDasharray: '5 5'
        }
    },
    labels: [
        {
            attrs: {
                label: {
                    text: '  '
                }
            }
        }
    ],
    defaultLabel: {
        markup: [
            {
                tagName: 'path',
                selector: 'symbol'
            }
        ],
        attrs: {
            symbol: {
                d: 'M -10 -10 10 10',
                stroke: 'cornflowerblue',
                fill: 'none',
                strokeWidth: 2,
                class: 'diagram-icon'
            }
        }
    }
};
/**
 * 領養參數
 *
 * @static
 * @type {TistNormalLinkInterface}
 * @memberof DiagramConstant
 */
DiagramConstant.ADOPT_LINK_PARAM = {
    sourceLink: '',
    tistType: 'normal-link',
    tistOrder: 1,
    isAdopt: true,
    attrs: {
        line: {
            stroke: 'grey',
            strokeDasharray: '5 5',
            targetMarker: {
                type: 'none'
            }
        }
    }
};
/**
 *角色基礎參數
 *
 * @static
 * @type {BasicIconInterface}
 * @memberof DiagramConstant
 */
DiagramConstant.BASIC_ICON_PARAM = {
    tistType: '',
    spouses: [],
    parents: '',
    childLink: '',
    adoption: [],
    twins: [],
    twinsLink: '',
    sibling: [],
    spouseLevel: 1,
    tistOrder: 0,
    size: {
        width: 50,
        height: 50
    },
    attrs: {
        symbol1: {
            d: 'M 0 0 25 25 50 0 0 50 25 25 50 50',
            stroke: 'black',
            strokeWidth: 1,
            fill: 'none'
        },
        symbol2: {
            d: 'M 0 25 50 25',
            stroke: 'black',
            strokeWidth: 1,
            fill: 'none'
        },
        symbol3: {
            d: 'M -10,-10 60,-10 60,60 54,54 54,-4 -4,-4 ' +
                '-4,54 54,54 60,60 -10,60 -10,-10',
            stroke: 'cornflowerblue',
            strokeWidth: 1,
            fill: 'cornflowerblue'
        },
        symbol4: {
            d: 'M 10 -12 10 -4 22 -4 22 -12 16 -16 10 -12',
            stroke: 'red',
            strokeWidth: 1,
            fill: 'red',
            cursor: 'pointer',
            title: '父母'
        },
        symbol5: {
            d: 'M 30 -12 30 -4 42 -4 42 -12 36 -16 30 -12',
            stroke: 'red',
            strokeWidth: 1,
            fill: 'red',
            cursor: 'pointer',
            title: '手足'
        },
        symbol6: {
            d: 'M 10 -12 10 -4 22 -4 22 -12 16 -16 10 -12',
            stroke: 'red',
            strokeWidth: 1,
            fill: 'red',
            cursor: 'pointer',
            transform: 'rotate(90,25,25)',
            title: '孿生'
        },
        symbol7: {
            d: 'M 30 -12 30 -4 42 -4 42 -12 36 -16 30 -12',
            stroke: 'red',
            strokeWidth: 1,
            fill: 'red',
            cursor: 'pointer',
            transform: 'rotate(90,25,25)',
            title: '伴侶'
        },
        symbol8: {
            d: 'M 10 -12 10 -4 22 -4 22 -12 16 -16 10 -12',
            stroke: 'red',
            strokeWidth: 1,
            fill: 'red',
            cursor: 'pointer',
            transform: 'rotate(180,25,25)',
            title: '婚生子女'
        },
        symbol9: {
            d: 'M 30 -12 30 -4 42 -4 42 -12 36 -16 30 -12',
            stroke: 'red',
            strokeWidth: 1,
            fill: 'red',
            cursor: 'pointer',
            transform: 'rotate(180,25,25)',
            title: '子女'
        }
    }
};
/**
 *生活圈參數
 *
 * @static
 * @type {PolygonInterface}
 * @memberof DiagramConstant
 */
DiagramConstant.LIFE_SPHERE_PARAM = {
    size: { width: 200, height: 200 },
    tistType: 'life-sphere',
    tistOrder: 0,
    attrs: {
        body: {
            refPoints: '50,0 150,0 200,100 150,200 50,200 0,100',
            fill: 'rgba(192,192,192,.5)',
            strokeWidth: 0
        }
    }
};
/**
 *生態圈參數
 *
 * @static
 * @type {PolygonInterface}
 * @memberof DiagramConstant
 */
DiagramConstant.ECOLOGY_SPHERE_PARAM = {
    size: { width: 100, height: 100 },
    //size: { width: 200, height: 200 },
    tistType: 'ecology-sphere',
    tistOrder: 0,
    attrs: {
        body: {
            fill: 'rgba(192,192,192,.5)',
            strokeWidth: 0
        }
    }
};
/**
 *文字區塊參數
 *
 * @static
 * @type {PolygonInterface}
 * @memberof DiagramConstant
 */
DiagramConstant.TEXT_AREA_PARAM = {
    size: { width: 150, height: 15 },
    tistType: 'text-area',
    tistOrder: 0,
    attrs: {
        body: {
            fill: 'rgba(165,165,165,.1)',
            strokeWidth: 0
        }
    }
};
/**
 *偏移量常數
 *
 * @static
 * @memberof DiagramConstant
 * lifeSphereCircle=DiagramConstant.LIFE_SPHERE_PARAM.size.width
 */
DiagramConstant.OFFSET_PARAM = {
    icon: 50 / 2,
    lifeSphereCircle: 200,
    positionScale: 1.5
};

},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
const utils_1 = require("./utils");
/**
 * Link抽象類
 * @abstract
 * @class AbstractLink
 * @author sungyeh
 */
class AbstractLink {
    /**
     *Creates an instance of AbstractLink.
     * @param {Paper} paper
     * @memberof AbstractLink
     */
    constructor(paper) {
        /**
         * 子 jointjs links
         *
         * @protected
         * @type {Array<any>}
         * @memberof AbstractLink
         */
        this._linkView = [];
        this._paper = paper;
        this._toolsMap = {
            'targetHead': function () {
                return new joint.linkTools.TargetArrowhead();
            },
            'sourceHead': function () {
                return new joint.linkTools.SourceArrowhead();
            },
            'remove': function () {
                return new joint.linkTools.Remove();
            },
            'boundary': function () {
                return new joint.linkTools.Boundary();
            },
            'vertices': function () {
                return new joint.linkTools.Vertices();
            },
            'segments': function () {
                return new joint.linkTools.Segments();
            }
        };
    }
    /**
     *移除Link
     *
     * @memberof AbstractLink
     */
    remove() {
        this._linkView.forEach(function (link) {
            link.remove();
        });
        this._paper.removeLink(this.getMajorLink().id);
    }
    /**
     * onClick功能
     *
     * @param {*} event
     * @memberof AbstractLink
     */
    onClick(event) {
        const self = this;
        this._paper.getOriginalPaper().on('link:pointerclick', function (view) {
        	if (view.model === self.getMajorLink()) {
                event(self);
            }
        });
    }
    /**
     * prop功能
     *
     * @param {string} key
     * @param {Object} [value]
     * @returns
     * @memberof AbstractLink
     */
    prop(key, value) {
        if (value !== undefined) {
            return this._linkView[0].prop(key, value);
        }
        else {
            return this._linkView[0].prop(key);
        }
    }
    /**
     * 取得jointjs links
     *
     * @returns {Array<any>}
     * @memberof AbstractLink
     */
    getLinks() {
        return this._linkView;
    }
    /**
     * 取得主要jointjs link
     *
     * @returns {*}
     * @memberof AbstractLink
     */
    getMajorLink() {
        return this._linkView[0];
    }
    /**
     * 設定主link tools
     *
     * @param {Array<String>} linkTools targetHead||sourceHead
     * @memberof AbstractLink
     */
    setLinkTools(linkTools) {
        const self = this;
        this.prop('linkTools', linkTools);
        this._paper.getOriginalPaper().on('link:mouseenter', function (linkView) {
            const tools = [];
            linkTools.forEach(function (tool) {
                tools.push(self._toolsMap[tool]());
            });
            if (self.getMajorLink() === linkView.model) {
                linkView.addTools(new joint.dia.ToolsView({
                    name: 'onhover',
                    tools: tools
                }));
            }
        });
        this._paper.getOriginalPaper().on('link:mouseleave', function (linkView) {
            if (!linkView.hasTools('onhover'))
                return;
            linkView.removeTools();
        });
    }
    /**
     * 右鍵事件
     *
     * @protected
     * @memberof AbstractLink
     */
    _rightClick() {
        const self = this;
        const node = document.querySelector(`[model-id="${this.getMajorLink().id}"]`);
        let menu;
        const lastContextMenu = {};
        node.addEventListener('contextmenu', function (mouse) {
            if (menu) {
                menu.remove();
            }
            menu = document.createElement('table');
            menu.style.position = 'absolute';
            menu.style.background = 'white';
            menu.border = '1px';
            menu.setAttribute('frame', 'box');
            menu.setAttribute('rules', 'none');
            menu.style.position = 'absolute';
            menu.style.boxShadow = '2px 2px 2px lightgrey';
            const title = {
                'normal-link': '普通關係',
                'harmonious-link': '和諧',
                'double-link': '親密',
                'triple-link': '非常親密',
                'dash-link': '疏離',
                'double-dash-link': '不和',
                'triple-dash-link': '仇恨',
                'double-vertical-link': '互不往來',
                'pulse-link': '衝突',
                'double-pulse-link': '又愛又恨',
                'double-line-pulse-link': '暴力',
                'boundary-double-pulse-link': '親密又暴力',
                'quadruple-pulse-link': '性侵害',
                'circle-link': '愛慕',
                'double-circle-link': '戀愛',
                'rex-link': '同居',
                'slash-link': '分居',
                'double-slash-link': '離婚',
                'back-slash-link': '曾經同居',
                'low-dependent-link': '依屬關係輕微',
                'medium-dependent-link': '依屬關係普通',
                'high-dependent-link': '依屬關係強烈',
                'exclusion-link': '互斥關係'
            };
            let spouseMenu = [];
            const spouseList = [];
            const spouseRelations = [
                'normal-link',
                'slash-link',
                'double-slash-link',
                'back-slash-link'
            ];
            //  婚姻關係
            if (self.prop('childs')) {
                spouseMenu = [
                    'normal-link',
                    'rex-link',
                    'slash-link',
                    'double-slash-link',
                    'back-slash-link'
                ];
                spouseMenu.forEach(function (type) {
                    spouseList.push({
                        title: title[type],
                        event: function () {
                            const origin = self.getMajorLink();
                            const changeTo = utils_1.DiagramUtils.generators[type](self._paper, origin.source(), origin.target());
                            let left = origin.source();
                            let right = origin.target();
                            left = self._paper.findByModelId(origin.source().id);
                            let leftSpouses;
                            leftSpouses = left.prop('spouses');
                            leftSpouses = leftSpouses.map(function (spouse) {
                                return spouse === origin.id ? changeTo.getMajorLink().id : spouse;
                            });
                            left.prop('spouses', leftSpouses);
                            right = self._paper.findByModelId(origin.target().id);
                            let rightSpouses;
                            rightSpouses = right.prop('spouses');
                            rightSpouses = rightSpouses.map(function (spouse) {
                                return spouse === origin.id ? changeTo.getMajorLink().id : spouse;
                            });
                            right.prop('spouses', rightSpouses);
                            changeTo.prop('childs', origin.prop('childs'));
                            changeTo.prop('childs').forEach(function (id) {
                                const child = self._paper.findByModelId(id);
                                const childLink = self._paper.findByModelId(child.prop('childLink'));
                                childLink.prop('sourceLink', changeTo.getMajorLink().id);
                                console.log(changeTo);
                            });
                            if (origin.prop('linkTools')) {
                                changeTo.setLinkTools(origin.prop('linkTools'));
                            }
                            self.remove();
                            console.log(self._paper.getOriginalPaper().model.attributes.cells.models);
                        }
                    });
                });
            }
            else if (spouseRelations.indexOf(self.prop('tistType')) === -1) {
                spouseMenu = [
                    { type: 'harmonious-link', split: false },
                    { type: 'double-link', split: false },
                    { type: 'triple-link', split: false },
                    { type: 'dash-link', split: true },
                    { type: 'double-dash-link', split: false },
                    { type: 'triple-dash-link', split: false },
                    { type: 'double-vertical-link', split: false },
                    { type: 'pulse-link', split: true },
                    { type: 'double-pulse-link', split: false },
                    { type: 'double-line-pulse-link', split: false },
                    { type: 'boundary-double-pulse-link', split: false },
                    { type: 'quadruple-pulse-link', split: true },
                    { type: 'circle-link', split: true },
                    { type: 'double-circle-link', split: false },
                    { type: 'low-dependent-link', split: true },
                    { type: 'medium-dependent-link', split: false },
                    { type: 'high-dependent-link', split: false },
                    { type: 'exclusion-link', split: false }
                ];
                spouseMenu.forEach(function (type) {
                    spouseList.push({
                        type: type.type,
                        split: type.split,
                        title: title[type.type],
                        event: function () {
                            const origin = self.getMajorLink();
                            const changeTo = utils_1.DiagramUtils.generators[type.type](self._paper, origin.source(), origin.target());
                            if (origin.prop('linkTools')) {
                                changeTo.setLinkTools(origin.prop('linkTools'));
                            }
                            self.remove();
                        }
                    });
                });
            }
            if (self.prop('parents')) {
                spouseList.push({
                    title: '親生',
                    event: function () {
                        self.getMajorLink().removeAttr('line/strokeDasharray');
                        self.prop('isAdopt', false);
                    },
                    split: true
                });
                spouseList.push({
                    title: '領養',
                    event: function () {
                        self.getMajorLink().attr(constants_1.DiagramConstant.ADOPT_LINK_PARAM.attrs);
                        self.prop('isAdopt', true);
                    },
                    split: true
                });
            }
            spouseList.push({
                title: '刪除',
                event: function () {
                    self.remove();
                },
                split: true
            });
            spouseList.forEach(function (content) {
                const tr = document.createElement('div');
                const td = document.createElement('div');
                // let img: any = document.createElement('img');
                // if (content.type)
                //     img.src = `links/${content.type}.png`;
                // img.width = '32';
                tr.style.border = 0;
                td.style.display = 'inline-block';
                if (content.split === true) {
                    tr.style.border = '1.5px';
                    tr.style.borderStyle = 'solid';
                    tr.style.borderColor = 'lightgrey';
                    tr.style.borderLeft = 0;
                    tr.style.borderBottom = 0;
                    tr.style.borderRight = 0;
                }
                td.innerHTML = content.title;
                tr.style.borderRadius = '2px';
                tr.addEventListener('mouseover', function () {
                    tr.style.background = 'cornflowerblue';
                });
                tr.addEventListener('mouseout', function () {
                    tr.style.background = 'white';
                });
                tr.addEventListener('mouseup', content.event);
                // tr.appendChild(img);
                tr.appendChild(td);
                menu.appendChild(tr);
            });
            document.body.appendChild(menu);
            const menuOffset = function (ev) {
                const x = document.documentElement.scrollLeft + ev.clientX;
                //const y = document.documentElement.scrollTop + ev.clientY;
                const y = mouse.pageY;
                const html = document.documentElement;
                const browserWidth = html.clientWidth;
                // const browserHeight = html.clientHeight;
                const menuWidth = menu.offsetWidth;
                // const menuHeight = menu.offsetHeight;
                return {
                    left: (x + menuWidth) > browserWidth ? (browserWidth - menuWidth) : x,
                    top: y
                };
            };
            menu.style.left = `${menuOffset(mouse).left}px`;
            menu.style.top = `${menuOffset(mouse).top}px`;
            lastContextMenu.x = mouse.pageX;
            lastContextMenu.y = mouse.pageY;
        });
        document.addEventListener('contextmenu', function (mouse) {
            if (mouse.pageX !== lastContextMenu.x && mouse.pageY !== lastContextMenu.y) {
                if (menu) {
                    menu.remove();
                }
            }
        });
        document.addEventListener('click', function (mouse) {
            if (mouse.pageX !== lastContextMenu.x && mouse.pageY !== lastContextMenu.y) {
                if (menu) {
                    menu.remove();
                }
            }
        });
    }
}
/**
 * 帶icon link抽象類
 *
 * @abstract
 * @class IconLink
 * @extends {AbstractLink}
 * @author sungyeh
 */
class IconLink extends AbstractLink {
    /**
     *Creates an instance of IconLink.
     * @param {Paper} paper
     * @memberof IconLink
     */
    constructor(paper) {
        super(paper);
        const self = this;
        this._targetElement = undefined;
        this._sourceElement = undefined;
        this._event = function () {
            self._rotate();
        };
    }
    /**
     * 旋轉icon
     *
     * @protected
     * @memberof IconLink
     */
    _rotate(index) {
        const link = index === undefined ? this.getMajorLink() : this.getLinks()[index];
        const linkNode = document.querySelector(`[model-id="${this.getMajorLink().id}"] path`);
        if (linkNode) {
            const paths = linkNode.getAttribute('d').split(' ');
            const deg = Math.atan2(+(paths[5]) - (+paths[2]), (+paths[4]) - (+paths[1])) * 180 / Math.PI;
            const icons = document.querySelectorAll(`[model-id="${link.id}"] .diagram-icon`);
            [].forEach.call(icons, function (icon) {
                icon.setAttribute('transform', `rotate(${deg})`);
            });
        }
    }
    /**
     * 判斷目標是否為element
     *
     * @private
     * @param {*} arrowElment
     * @param {*} bindElment
     * @param {*} bindEvent
     * @memberof IconLink
     */
    _bind(arrowElment, bindElment, bindEvent) {
        if (arrowElment.id) {
            bindElment = this._paper.findByModelId(arrowElment.id).getElement();
            bindElment.on('change:position', bindEvent);
        }
        else if (bindElment) {
            bindElment.off('change:position', bindEvent);
            bindElment = undefined;
        }
    }
    /**
     * source、target事件綁定
     *
     * @private
     * @param {*} linkView
     * @memberof IconLink
     */
    _bindEvent(linkView) {
        this._bind(linkView.target(), this._targetElement, this._event);
        this._bind(linkView.source(), this._sourceElement, this._event);
    }
    /**
     * icon初始化
     *
     * @protected
     * @param {number} index
     * @memberof IconLink
     */
    _initIcon() {
        this._bindEvent(this.getMajorLink());
        const self = this;
        self._rotate();
        this.getMajorLink().on('change:target change:source', function (linkView) {
            self._bindEvent(linkView);
            if (linkView.target().id === undefined || linkView.source().id === undefined) {
                self._rotate();
            }
        });
    }
}
/**
 * 三重線
 *
 * @export
 * @class TripleLink
 * @extends {AbstractLink}
 * @author sungyeh
 */
class TripleLink extends AbstractLink {
    /**
     *Creates an instance of TripleLink.
     * @param {Paper} paper
     * @param {*} source
     * @param {*} target
     * @param {TistTripleLinkInterface} [param]
     * @memberof TripleLink
     */
    constructor(paper, source, target, param) {
        super(paper);
        const self = this;
        this._targetElement = undefined;
        this._sourceElement = undefined;
        this._event = function () {
            self._rotate();
        };
        if (param) {
            this._attr = param;
        }
        else {
            this._attr = constants_1.DiagramConstant.DOUBLE_LINK_PARAM;
        }
        ;
        const link = new joint.shapes.standard.Link(this._attr);
        link.source(source);
        link.target(target);
        link.addTo(paper.getGraph());
        const link2 = new joint.shapes.standard.Link(this._attr.attrs.outline);
        const link3 = new joint.shapes.standard.Link(this._attr.attrs.outline);
        this._linkView.push(link);
        this._linkView.push(link2);
        this._linkView.push(link3);
        link2.addTo(paper.getGraph());
        link3.addTo(paper.getGraph());
        link.toFront();
        this._initLinkCombo(0);
        if (this.prop('linkTools')) {
            this.setLinkTools(this.prop('linkTools'));
        }
        paper.addLink(this);
        this._rightClick();
    }
    /**
     * 旋轉兩外線
     *
     * @protected
     * @memberof TripleLink
     */
    _rotate() {
        const self = this;
        const dNode = document.querySelector(`[model-id="${self.getMajorLink().id}"] [joint-selector="wrapper"]`);
        if (dNode) {
            const dArray = dNode.getAttribute('d').split(' ');
            const angleDeg = Math.atan2((+dArray[5]) - (+dArray[2]), (+dArray[4]) - (+dArray[1])) * 180 / Math.PI;
            const angleRadians = (angleDeg + 90) * Math.PI / 180;
            const angleRadians2 = (angleDeg + 270) * Math.PI / 180;
            const offset1 = { x: Math.cos(angleRadians), y: Math.sin(angleRadians) };
            const offset2 = { x: Math.cos(angleRadians2), y: Math.sin(angleRadians2) };
            self.getLinks()[1].source({
                x: (+dArray[1]) + 6 * offset1.x,
                y: (+dArray[2]) + 6 * offset1.y
            });
            self.getLinks()[1].target({
                x: (+dArray[4]) + 6 * offset1.x,
                y: (+dArray[5]) + 6 * offset1.y
            });
            self.getLinks()[2].source({
                x: (+dArray[1]) + 6 * offset2.x,
                y: (+dArray[2]) + 6 * offset2.y
            });
            self.getLinks()[2].target({
                x: (+dArray[4]) + 6 * offset2.x,
                y: (+dArray[5]) + 6 * offset2.y
            });
        }
    }
    /**
     *
     * 判斷目標是否為element
     * @private
     * @param {*} arrowElment
     * @param {*} bindElment
     * @param {*} bindEvent
     * @memberof TripleLink
     */
    _bind(arrowElment, bindElment, bindEvent) {
        const self = this;
        const blank = function () {
            self._rotate();
        };
        if (arrowElment.id) {
            bindElment = this._paper.findByModelId(arrowElment.id).getElement();
            bindElment.on('change:position', bindEvent);
            self._paper.getOriginalPaper().on('blank:pointerclick element:pointerup element:mouseout', blank);
        }
        else if (bindElment) {
            bindElment.off('change:position', bindEvent);
            self._paper.getOriginalPaper().off('blank:pointerclick element:pointerup element:mouseout', blank);
            bindElment = undefined;
        }
    }
    /**
     * source、target事件綁定
     *
     * @private
     * @param {*} linkView
     * @memberof IconLink
     */
    _bindEvent(linkView) {
        this._bind(linkView.target(), this._targetElement, this._event);
        this._bind(linkView.source(), this._sourceElement, this._event);
    }
    /**
     * 初始化兩外線
     *
     * @protected
     * @param {number} index
     * @memberof TripleLink
     */
    _initLinkCombo(index) {
        const self = this;
        this._bindEvent(this._linkView[index]);
        this._rotate();
        this._linkView[index].on('change:target change:source', function (linkView) {
            self._bindEvent(linkView);
            if (linkView.target().id === undefined || linkView.source().id === undefined) {
                self._rotate();
            }
        });
    }
}
exports.TripleLink = TripleLink;
/**
 * 單條線
 *
 * @export
 * @class NormalLink
 * @extends {AbstractLink}
 * @author sungyeh
 */
class NormalLink extends AbstractLink {
    /**
       *Creates an instance of NormalLink.
       * @param {Paper} paper
       * @param {*} source
       * @param {*} target
       * @param {TistNormalLinkInterface} [param]
       * @memberof NormalLink
       */
    constructor(paper, source, target, param) {
        super(paper);
        if (param) {
            this._attr = param;
        }
        else {
            this._attr = constants_1.DiagramConstant.NORMAL_LINK_PARAM;
        }
        const link = new joint.shapes.standard.Link(this._attr);
        link.source(source);
        link.target(target);
        link.addTo(paper.getGraph());
        this._linkView.push(link);
        if (this.prop('linkTools')) {
            this.setLinkTools(this.prop('linkTools'));
        }
        paper.addLink(this);
        this._rightClick();
        // 是否為婚生子女線
        if (link.prop('sourceLink')) {
            const sourceLink = paper.findByModelId(link.prop('sourceLink'));
            const left = paper.findByModelId(sourceLink.getMajorLink().source().id);
            const right = paper.findByModelId(sourceLink.getMajorLink().target().id);
            const child = paper.findByModelId(source.id);
            utils_1.DiagramUtils.bindChildEvent(left.getElement(), right.getElement(), child.getElement(), sourceLink.getMajorLink(), this.getMajorLink());
        }
        // 孿生處理
        if (source.id) {
            const sourceObj = paper.findByModelId(source.id);
            const twins = sourceObj.prop('twins');
            if (twins && twins.length > 0) {
                const twinsHead = paper.findByModelId(twins[0]);
                const parent = paper.findByModelId(twinsHead.prop('parents'));
                const childLink = paper.findByModelId(twinsHead.prop('childLink'));
                const twinsLink = paper.findByModelId(sourceObj.prop('twinsLink'));
                if (source.id !== twins[0]) {
                    utils_1.DiagramUtils.bindTwinsEvent(paper, parent, twinsHead, twinsLink, childLink);
                }
            }
        }
    }
}
exports.NormalLink = NormalLink;
/**
 * 互不往來線
 *
 * @export
 * @class DoubleVerticalLink
 * @extends {IconLink}
 * @author sungyeh
 */
class DoubleVerticalLink extends IconLink {
    /**
       *Creates an instance of DoubleVerticalLink.
       * @param {Paper} paper
       * @param {*} source
       * @param {*} target
       * @param {CustomLinkInterface} [param]
       * @memberof DoubleVerticalLink
       */
    constructor(paper, source, target, param) {
        super(paper);
        if (param) {
            this._attr = param;
        }
        else {
            this._attr = constants_1.DiagramConstant.DOUBLE_VERTICAL_LINK_PARAM;
        }
        joint.shapes.standard.Link.define('tist.DoubleVerticalLink', this._attr);
        const link = new joint.shapes.tist.DoubleVerticalLink();
        link.addTo(paper.getGraph());
        link.removeProp('tistOrder');
        link.removeProp('tistType');
        link.prop('defaultLabel', constants_1.DiagramConstant.DOUBLE_VERTICAL_LINK_PARAM.defaultLabel);
        link.prop('labels', constants_1.DiagramConstant.DOUBLE_VERTICAL_LINK_PARAM.labels);
        link.prop('disabledInteractive', constants_1.DiagramConstant.DOUBLE_VERTICAL_LINK_PARAM.disabledInteractive);
        const mask = new joint.shapes.standard.Link(constants_1.DiagramConstant.MASK_LINK_PARAM);
        mask.source(source);
        mask.target(target);
        mask.prop('attrs2', this._attr.attrs);
        mask.prop('type', 'tist.DoubleVerticalLink');
        mask.prop('tistOrder', 1);
        mask.prop('tistType', 'double-vertical-link');
        mask.addTo(paper.getGraph());
        mask.prop('attrs2', this._attr.attrs);
        this._linkView.push(mask);
        this._linkView.push(link);
        this._initIcon();
        if (link.prop('linkTools')) {
            this.setLinkTools(link.prop('linkTools'));
        }
        paper.addLink(this);
        this._rightClick();
    }
    /**
      * 擴充旋轉
      *
      * @protected
      * @memberof DoubleVerticalLink
      */
    _rotate() {
        super._rotate(1);
        const linkNode = document
            .querySelector(`[model-id="${this.getMajorLink().id}"] [joint-selector="wrapper"]`);
        if (linkNode) {
            const d = linkNode.getAttribute('d').split(' ');
            this.getLinks()[1].source({ x: (+d[1]), y: (+d[2]) });
            this.getLinks()[1].target({ x: (+d[4]), y: (+d[5]) });
        }
    }
}
exports.DoubleVerticalLink = DoubleVerticalLink;
/**
 * 衝突線
 *
 * @export
 * @class PulseLink
 * @extends {IconLink}
 * @author sungyeh
 */
class PulseLink extends IconLink {
    /**
       *Creates an instance of PulseLink.
       * @param {Paper} paper
       * @param {*} source
       * @param {*} target
       * @param {CustomLinkInterface} [param]
       * @memberof PulseLink
       */
    constructor(paper, source, target, param) {
        super(paper);
        if (param) {
            this._attr = param;
        }
        else {
            this._attr = constants_1.DiagramConstant.PULSE_LINK_PARAM;
        }
        joint.shapes.standard.Link.define('tist.PulseLink', this._attr);
        const link = new joint.shapes.tist.PulseLink();
        link.addTo(paper.getGraph());
        link.removeProp('tistOrder');
        link.removeProp('tistType');
        link.prop('defaultLabel', constants_1.DiagramConstant.PULSE_LINK_PARAM.defaultLabel);
        link.prop('labels', constants_1.DiagramConstant.PULSE_LINK_PARAM.labels);
        link.prop('disabledInteractive', constants_1.DiagramConstant.PULSE_LINK_PARAM.disabledInteractive);
        const mask = new joint.shapes.standard.Link(constants_1.DiagramConstant.MASK_LINK_PARAM);
        mask.source(source);
        mask.target(target);
        mask.prop('attrs2', this._attr.attrs);
        mask.prop('type', 'tist.PulseLink');
        mask.prop('tistOrder', 1);
        mask.prop('tistType', 'pulse-link');
        mask.addTo(paper.getGraph());
        this._linkView.push(mask);
        this._linkView.push(link);
        this._initIcon();
        if (link.prop('linkTools')) {
            this.setLinkTools(link.prop('linkTools'));
        }
        paper.addLink(this);
        this._rightClick();
    }
    /**
       * 擴充旋轉，覆寫path d屬性
       *
       * @protected
       * @memberof PulseLink
       */
    _rotate() {
        super._rotate(1);
        const linkNode = document
            .querySelector(`[model-id="${this.getMajorLink().id}"] [joint-selector="wrapper"]`);
        if (linkNode) {
            const d = linkNode.getAttribute('d').split(' ');
            const angleDeg = Math.atan2((+d[5]) - (+d[2]), (+d[4]) - (+d[1])) * 180 / Math.PI;
            const orgAngleRadians = angleDeg * Math.PI / 180;
            const central = {
                x: ((+d[1]) + (+d[4])) / 2,
                y: ((+d[2]) + (+d[5])) / 2
            };
            const endPoint1 = {
                x: central.x + 15 * Math.cos(orgAngleRadians),
                y: central.y + 15 * Math.sin(orgAngleRadians)
            };
            const endPoint2 = {
                x: central.x - 15 * Math.cos(orgAngleRadians),
                y: central.y - 15 * Math.sin(orgAngleRadians)
            };
            const newD = [
                d[0], d[1], d[2], 'L', endPoint2.x.toString(), endPoint2.y.toString(), 'M',
                endPoint1.x.toString(), endPoint1.y.toString(), d[3], d[4], d[5]
            ];
            this.getLinks()[1].source({ x: (+d[1]), y: (+d[2]) });
            this.getLinks()[1].target({ x: (+d[4]), y: (+d[5]) });
            const newNode = document
                .querySelector(`[model-id="${this.getLinks()[1].id}"] [joint-selector="line"]`);
            newNode.setAttribute('d', newD.join(' '));
        }
    }
}
exports.PulseLink = PulseLink;
/**
 * 暴力線
 *
 * @export
 * @class DoublePulseLink
 * @extends {IconLink}
 * @author sungyeh
 */
class DoublePulseLink extends IconLink {
    /**
       *Creates an instance of DoublePulseLink.
       * @param {Paper} paper
       * @param {*} source
       * @param {*} target
       * @param {CustomLinkInterface} [param]
       * @memberof DoublePulseLink
       */
    constructor(paper, source, target, param) {
        super(paper);
        if (param) {
            this._attr = param;
        }
        else {
            this._attr = constants_1.DiagramConstant.DOUBLE_PULSE_LINK_PARAM;
        }
        joint.shapes.standard.Link.define('tist.DoublePulseLink', this._attr);
        const link = new joint.shapes.tist.DoublePulseLink();
        link.addTo(paper.getGraph());
        link.removeProp('tistOrder');
        link.removeProp('tistType');
        link.prop('defaultLabel', constants_1.DiagramConstant.DOUBLE_PULSE_LINK_PARAM.defaultLabel);
        link.prop('labels', constants_1.DiagramConstant.DOUBLE_PULSE_LINK_PARAM.labels);
        link.prop('disabledInteractive', constants_1.DiagramConstant.DOUBLE_PULSE_LINK_PARAM.disabledInteractive);
        link.addTo(paper.getGraph());
        const mask = new joint.shapes.standard.Link(constants_1.DiagramConstant.MASK_LINK_PARAM);
        mask.source(source);
        mask.target(target);
        mask.prop('attrs2', this._attr.attrs);
        mask.prop('type', 'tist.DoublePulseLink');
        mask.prop('tistOrder', 1);
        mask.prop('tistType', 'double-pulse-link');
        mask.addTo(paper.getGraph());
        this._linkView.push(mask);
        this._linkView.push(link);
        this._initIcon();
        if (link.prop('linkTools')) {
            this.setLinkTools(link.prop('linkTools'));
        }
        paper.addLink(this);
        this._rightClick();
    }
    /**
       * 擴充旋轉，覆寫path d屬性
       *
       * @protected
       * @memberof DoublePulseLink
       */
    _rotate() {
        super._rotate(1);
        const linkNode = document
            .querySelector(`[model-id="${this.getMajorLink().id}"] [joint-selector="wrapper"]`);
        if (linkNode) {
            const d = linkNode.getAttribute('d').split(' ');
            const angleDeg = Math.atan2((+d[5]) - (+d[2]), (+d[4]) - (+d[1])) * 180 / Math.PI;
            const orgAngleRadians = angleDeg * Math.PI / 180;
            const central = {
                x: ((+d[1]) + (+d[4])) / 2,
                y: ((+d[2]) + (+d[5])) / 2
            };
            const endPoint1 = {
                x: central.x + 45 * Math.cos(orgAngleRadians),
                y: central.y + 45 * Math.sin(orgAngleRadians)
            };
            const endPoint2 = {
                x: central.x - 45 * Math.cos(orgAngleRadians),
                y: central.y - 45 * Math.sin(orgAngleRadians)
            };
            const newD = [
                d[0], d[1], d[2], 'L', endPoint2.x.toString(),
                endPoint2.y.toString(), 'M', endPoint1.x.toString(), endPoint1.y.toString(), d[3], d[4], d[5]
            ];
            this.getLinks()[1].source({ x: (+d[1]), y: (+d[2]) });
            this.getLinks()[1].target({ x: (+d[4]), y: (+d[5]) });
            const newNode = document
                .querySelector(`[model-id="${this.getLinks()[1].id}"] [joint-selector="line"]`);
            newNode.setAttribute('d', newD.join(' '));
        }
    }
}
exports.DoublePulseLink = DoublePulseLink;
/**
 * 親密衝突線
 *
 * @export
 * @class DoubleLinePulseLink
 * @extends {PulseLink}
 * @author sungyeh
 */
class DoubleLinePulseLink extends PulseLink {
    /**
     *Creates an instance of DoubleLinePulseLink.
     * @param {Paper} paper
     * @param {*} source
     * @param {*} target
     * @param {CustomLinkInterface} [param]
     * @memberof DoubleLinePulseLink
     */
    constructor(paper, source, target, param) {
        if (param === undefined) {
            param = constants_1.DiagramConstant.DOUBLE_LINE_PULSE_LINK_PARAM;
        }
        const outLine = new TripleLink(paper, source, target, param.attrs.subLine);
        paper.removeLink(outLine.getMajorLink().id);
        super(paper, source, target, param);
        const mask = super.getMajorLink();
        mask.prop('attrs2', this._attr.attrs);
        mask.prop('tistType', 'double-line-pulse-link');
        this._subLink = outLine;
        this._linkView.push(outLine.getMajorLink());
    }
    /**
    * 擴充旋轉
    *
    * @protected
    * @memberof DoubleLinePulseLink
    */
    _rotate() {
        super._rotate();
        if (this._subLink) {
            this._subLink.getMajorLink().source(this.getLinks()[1].source());
            this._subLink.getMajorLink().target(this.getLinks()[1].target());
        }
    }
    /**
     * 擴充remove
     *
     * @memberof DoubleLinePulseLink
     */
    remove() {
        super.remove();
        this._subLink.remove();
    }
}
exports.DoubleLinePulseLink = DoubleLinePulseLink;
/**
 * 親密暴力線
 *
 * @export
 * @class BoundaryDoublePulseLink
 * @extends {DoublePulseLink}
 * @author sungyeh
 */
class BoundaryDoublePulseLink extends DoublePulseLink {
    /**
     *Creates an instance of BoundaryDoublePulseLink.
     * @param {Paper} paper
     * @param {*} source
     * @param {*} target
     * @param {CustomLinkInterface} [param]
     * @memberof BoundaryDoublePulseLink
     */
    constructor(paper, source, target, param) {
        if (param === undefined) {
            param = constants_1.DiagramConstant.BOUNDARY_DOUBLE_PULSE_LINK_PARAM;
        }
        const outLine = new TripleLink(paper, source, target, param.attrs.subLine);
        paper.removeLink(outLine.getMajorLink().id);
        super(paper, source, target, param);
        const mask = super.getMajorLink();
        mask.prop('attrs2', this._attr.attrs);
        mask.prop('tistType', 'boundary-double-pulse-link');
        this._subLink = outLine;
        this._linkView.push(outLine.getMajorLink());
    }
    /**
     * 擴充旋轉
     *
     * @protected
     * @memberof BoundaryDoublePulseLink
     */
    _rotate() {
        super._rotate();
        if (this._subLink) {
            this._subLink.getMajorLink().source(this.getLinks()[1].source());
            this._subLink.getMajorLink().target(this.getLinks()[1].target());
        }
    }
    /**
     * 擴充remove
     *
     * @memberof BoundaryDoublePulseLink
     */
    remove() {
        super.remove();
        this._subLink.remove();
    }
}
exports.BoundaryDoublePulseLink = BoundaryDoublePulseLink;
/**
 * 性侵害線
 *
 * @export
 * @class QuadruplePulseLink
 * @extends {TripleLink}
 * @author sungyeh
 */
class QuadruplePulseLink extends TripleLink {
    /**
     *Creates an instance of QuadruplePulseLink.
     * @param {Paper} paper
     * @param {*} source
     * @param {*} target
     * @param {CustomLinkInterface} [param]
     * @memberof QuadruplePulseLink
     */
    constructor(paper, source, target, param) {
        if (param === undefined) {
            param = constants_1.DiagramConstant.QUADRUPLE_PULSE_LINK_PARAM;
        }
        super(paper, source, target, param.attrs.subLine);
        this._attr = param;
        joint.shapes.standard.Link.define('tist.QuadruplePulseLink', this._attr);
        const link = new joint.shapes.tist.QuadruplePulseLink();
        link.addTo(paper.getGraph());
        link.source(source);
        link.target(target);
        link.removeProp('tistOrder');
        link.removeProp('tistType');
        link.prop('defaultLabel', constants_1.DiagramConstant.QUADRUPLE_PULSE_LINK_PARAM.defaultLabel);
        link.prop('labels', constants_1.DiagramConstant.QUADRUPLE_PULSE_LINK_PARAM.labels);
        link.prop('disabledInteractive', constants_1.DiagramConstant.QUADRUPLE_PULSE_LINK_PARAM.disabledInteractive);
        paper.removeLink(this.getMajorLink().id);
        this.getMajorLink().prop('attrs2', param.attrs);
        this.getMajorLink().prop('type', 'tist.QuadruplePulseLink');
        this.getMajorLink().prop('tistOrder', 1);
        this.getMajorLink().prop('tistType', 'quadruple-pulse-link');
        this._subLink = link;
        this.getMajorLink().toFront();
        super._initLinkCombo(0);
        if (link.prop('linkTools')) {
            this.setLinkTools(link.prop('linkTools'));
        }
        paper.addLink(this);
        this._rightClick();
    }
    /**
     * 擴充旋轉，覆寫path d屬性
     *
     * @protected
     * @memberof PulseLink
     */
    _rotate() {
        super._rotate();
        const subArry = this.getLinks().map(function (linkView, index) {
            if (index > 0) {
                return linkView;
            }
        }).filter(function (linkView) {
            return linkView !== undefined;
        });
        const linkNode = document
            .querySelector(`[model-id="${this.getMajorLink().id}"] [joint-selector="wrapper"]`);
        if (linkNode) {
            if (this._subLink) {
                const paths = linkNode.getAttribute('d').split(' ');
                const deg = Math.atan2(+(paths[5]) - (+paths[2]), (+paths[4]) - (+paths[1])) * 180 / Math.PI;
                const icons = document.querySelectorAll(`[model-id="${this._subLink.id}"] .diagram-icon`);
                [].forEach.call(icons, function (icon) {
                    icon.setAttribute('transform', `rotate(${deg})`);
                });
                const d = linkNode.getAttribute('d').split(' ');
                this._subLink.source({ x: (+d[1]), y: (+d[2]) });
                this._subLink.target({ x: (+d[4]), y: (+d[5]) });
            }
            subArry.forEach(function (linkView) {
                const linkNode = document.querySelector(`[model-id="${linkView.id}"] [joint-selector="wrapper"]`);
                if (linkNode) {
                    const d = linkNode.getAttribute('d').split(' ');
                    const angleDeg = Math.atan2((+d[5]) - (+d[2]), (+d[4]) - (+d[1])) * 180 / Math.PI;
                    const orgAngleRadians = angleDeg * Math.PI / 180;
                    const central = {
                        x: ((+d[1]) + (+d[4])) / 2,
                        y: ((+d[2]) + (+d[5])) / 2
                    };
                    const endPoint1 = {
                        x: central.x + 45 * Math.cos(orgAngleRadians),
                        y: central.y + 45 * Math.sin(orgAngleRadians)
                    };
                    const endPoint2 = {
                        x: central.x - 45 * Math.cos(orgAngleRadians),
                        y: central.y - 45 * Math.sin(orgAngleRadians)
                    };
                    const newD = [
                        d[0], d[1], d[2], 'L', endPoint2.x.toString(),
                        endPoint2.y.toString(), 'M', endPoint1.x.toString(), endPoint1.y.toString(), d[3], d[4], d[5]
                    ];
                    const newNode = document.querySelector(`[model-id="${linkView.id}"] [joint-selector="line"]`);
                    newNode.setAttribute('d', newD.join(' '));
                }
            });
        }
    }
    /**
     * 擴充remove
     *
     * @memberof QuadruplePulseLink
     */
    remove() {
        super.remove();
        this._subLink.remove();
    }
}
exports.QuadruplePulseLink = QuadruplePulseLink;
/**
 * 愛慕線
 *
 * @export
 * @class CircleLink
 * @extends {AbstractLink}
 * @author sungyeh
 */
class CircleLink extends IconLink {
    /**
       *Creates an instance of CircleLink.
       * @param {Paper} paper
       * @param {*} source
       * @param {*} target
       * @param {CustomLinkInterface} [param]
       * @memberof CircleLink
       */
    constructor(paper, source, target, param) {
        super(paper);
        if (param) {
            this._attr = param;
        }
        else {
            this._attr = constants_1.DiagramConstant.CIRCLE_LINK_PARAM;
        }
        joint.shapes.standard.Link.define('tist.CircleLink', this._attr);
        const link = new joint.shapes.tist.CircleLink();
        link.addTo(paper.getGraph());
        link.removeProp('tistOrder');
        link.removeProp('tistType');
        link.prop('defaultLabel', constants_1.DiagramConstant.CIRCLE_LINK_PARAM.defaultLabel);
        link.prop('labels', constants_1.DiagramConstant.CIRCLE_LINK_PARAM.labels);
        link.prop('disabledInteractive', constants_1.DiagramConstant.CIRCLE_LINK_PARAM.disabledInteractive);
        const mask = new joint.shapes.standard.Link(constants_1.DiagramConstant.MASK_LINK_PARAM);
        mask.source(source);
        mask.target(target);
        mask.prop('attrs2', this._attr.attrs);
        mask.prop('type', 'tist.CircleLink');
        mask.prop('tistOrder', 1);
        mask.prop('tistType', 'circle-link');
        mask.addTo(paper.getGraph());
        this._linkView.push(mask);
        this._linkView.push(link);
        this._initIcon();
        if (link.prop('linkTools')) {
            this.setLinkTools(link.prop('linkTools'));
        }
        paper.addLink(this);
        this._rightClick();
    }
    /**
       * 擴充旋轉
       *
       * @protected
       * @memberof CircleLink
       */
    _rotate() {
        super._rotate(1);
        const linkNode = document
            .querySelector(`[model-id="${this.getMajorLink().id}"] [joint-selector="wrapper"]`);
        if (linkNode) {
            const d = linkNode.getAttribute('d').split(' ');
            this.getLinks()[1].source({ x: (+d[1]), y: (+d[2]) });
            this.getLinks()[1].target({ x: (+d[4]), y: (+d[5]) });
        }
    }
}
exports.CircleLink = CircleLink;
/**
 * 戀愛線
 *
 * @export
 * @class DoubleCircleLink
 * @extends {AbstractLink}
 * @author sungyeh
 */
class DoubleCircleLink extends IconLink {
    /**
       *Creates an instance of DoubleCircleLink.
       * @param {Paper} paper
       * @param {*} source
       * @param {*} target
       * @param {CustomLinkInterface} [param]
       * @memberof DoubleCircleLink
       */
    constructor(paper, source, target, param) {
        super(paper);
        if (param) {
            this._attr = param;
        }
        else {
            this._attr = constants_1.DiagramConstant.DOUBLE_CIRCLE_LINK_PARAM;
        }
        joint.shapes.standard.Link.define('tist.DoubleCircleLink', this._attr);
        const link = new joint.shapes.tist.DoubleCircleLink();
        link.addTo(paper.getGraph());
        link.removeProp('tistOrder');
        link.removeProp('tistType');
        link.prop('defaultLabel', constants_1.DiagramConstant.DOUBLE_CIRCLE_LINK_PARAM.defaultLabel);
        link.prop('labels', constants_1.DiagramConstant.DOUBLE_CIRCLE_LINK_PARAM.labels);
        link.prop('disabledInteractive', constants_1.DiagramConstant.DOUBLE_CIRCLE_LINK_PARAM.disabledInteractive);
        const mask = new joint.shapes.standard.Link(constants_1.DiagramConstant.MASK_LINK_PARAM);
        mask.source(source);
        mask.target(target);
        mask.prop('attrs2', this._attr.attrs);
        mask.prop('type', 'tist.DoubleCircleLink');
        mask.prop('tistOrder', 1);
        mask.prop('tistType', 'double-circle-link');
        mask.addTo(paper.getGraph());
        this._linkView.push(mask);
        this._linkView.push(link);
        this._initIcon();
        if (link.prop('linkTools')) {
            this.setLinkTools(link.prop('linkTools'));
        }
        paper.addLink(this);
        this._rightClick();
    }
    /**
       * 擴充旋轉
       *
       * @protected
       * @memberof DoubleCircleLink
       */
    _rotate() {
        super._rotate(1);
        const linkNode = document
            .querySelector(`[model-id="${this.getMajorLink().id}"] [joint-selector="wrapper"]`);
        if (linkNode) {
            const d = linkNode.getAttribute('d').split(' ');
            this.getLinks()[1].source({ x: (+d[1]), y: (+d[2]) });
            this.getLinks()[1].target({ x: (+d[4]), y: (+d[5]) });
        }
    }
}
exports.DoubleCircleLink = DoubleCircleLink;
/**
 * 同居線
 *
 * @export
 * @class RexDashLink
 * @extends {IconLink}
 * @author sungyeh
 */
class RexDashLink extends IconLink {
    /**
     *Creates an instance of RexDashLink.
     * @param {Paper} paper
     * @param {*} source
     * @param {*} target
     * @param {CustomLinkInterface} [param]
     * @memberof RexDashLink
     */
    constructor(paper, source, target, param) {
        super(paper);
        if (param) {
            this._attr = param;
        }
        else {
            this._attr = constants_1.DiagramConstant.REX_LINK_PARAM;
        }
        joint.shapes.standard.Link.define('tist.RexDashLink', this._attr);
        const link = new joint.shapes.tist.RexDashLink();
        link.addTo(paper.getGraph());
        link.removeProp('tistOrder');
        link.removeProp('tistType');
        link.prop('defaultLabel', constants_1.DiagramConstant.REX_LINK_PARAM.defaultLabel);
        link.prop('labels', constants_1.DiagramConstant.REX_LINK_PARAM.labels);
        link.prop('disabledInteractive', constants_1.DiagramConstant.REX_LINK_PARAM.disabledInteractive);
        const maskParam = JSON.parse(JSON.stringify(constants_1.DiagramConstant.MASK_LINK_PARAM));
        maskParam.id = this._attr.id;
        const mask = new joint.shapes.standard.Link(maskParam);
        mask.source(source);
        mask.target(target);
        mask.prop('attrs2', this._attr.attrs);
        mask.prop('type', 'tist.RexDashLink');
        mask.prop('tistOrder', 2);
        mask.prop('tistType', 'rex-link');
        mask.prop('childs', this._attr.childs);
        mask.addTo(paper.getGraph());
        this._linkView.push(mask);
        this._linkView.push(link);
        this._initIcon();
        if (link.prop('linkTools')) {
            this.setLinkTools(link.prop('linkTools'));
        }
        paper.addLink(this);
        this._rightClick();
    }
    /**
     * 擴充旋轉
     *
     * @protected
     * @memberof RexDashLink
     */
    _rotate() {
        super._rotate(1);
        const linkNode = document
            .querySelector(`[model-id="${this.getMajorLink().id}"] [joint-selector="wrapper"]`);
        if (linkNode) {
            const d = linkNode.getAttribute('d').split(' ');
            this.getLinks()[1].source({ x: (+d[1]), y: (+d[2]) });
            this.getLinks()[1].target({ x: (+d[4]), y: (+d[5]) });
        }
    }
}
exports.RexDashLink = RexDashLink;
/**
 * 分居線
 *
 * @export
 * @class SlashLink
 * @extends {IconLink}
 * @author sungyeh
 */
class SlashLink extends IconLink {
    /**
       *Creates an instance of SlashLink.
       * @param {Paper} paper
       * @param {*} source
       * @param {*} target
       * @param {CustomLinkInterface} [param]
       * @memberof SlashLink
       */
    constructor(paper, source, target, param) {
        super(paper);
        if (param) {
            this._attr = param;
        }
        else {
            this._attr = constants_1.DiagramConstant.SLASH_LINK_PARAM;
        }
        joint.shapes.standard.Link.define('tist.SlashLink', this._attr);
        const link = new joint.shapes.tist.SlashLink();
        link.addTo(paper.getGraph());
        link.removeProp('tistOrder');
        link.removeProp('tistType');
        link.prop('defaultLabel', constants_1.DiagramConstant.SLASH_LINK_PARAM.defaultLabel);
        link.prop('labels', constants_1.DiagramConstant.SLASH_LINK_PARAM.labels);
        link.prop('disabledInteractive', constants_1.DiagramConstant.SLASH_LINK_PARAM.disabledInteractive);
        const maskParam = JSON.parse(JSON.stringify(constants_1.DiagramConstant.MASK_LINK_PARAM));
        maskParam.id = this._attr.id;
        const mask = new joint.shapes.standard.Link(maskParam);
        mask.source(source);
        mask.target(target);
        mask.prop('attrs2', this._attr.attrs);
        mask.prop('type', 'tist.SlashLink');
        mask.prop('tistOrder', 2);
        mask.prop('tistType', 'slash-link');
        mask.prop('childs', this._attr.childs);
        mask.addTo(paper.getGraph());
        this._linkView.push(mask);
        this._linkView.push(link);
        this._initIcon();
        if (link.prop('linkTools')) {
            this.setLinkTools(link.prop('linkTools'));
        }
        paper.addLink(this);
        this._rightClick();
    }
    /**
       * 擴充旋轉
       *
       * @protected
       * @memberof SlashLink
       */
    _rotate() {
        super._rotate(1);
        const linkNode = document
            .querySelector(`[model-id="${this.getMajorLink().id}"] [joint-selector="wrapper"]`);
        if (linkNode) {
            const d = linkNode.getAttribute('d').split(' ');
            this.getLinks()[1].source({ x: (+d[1]), y: (+d[2]) });
            this.getLinks()[1].target({ x: (+d[4]), y: (+d[5]) });
        }
    }
}
exports.SlashLink = SlashLink;
/**
 * 離婚線
 *
 * @export
 * @class DoubleSlashLink
 * @extends {IconLink}
 * @author sungyeh
 */
class DoubleSlashLink extends IconLink {
    /**
       *Creates an instance of DoubleSlashLink.
       * @param {Paper} paper
       * @param {*} source
       * @param {*} target
       * @param {CustomLinkInterface} [param]
       * @memberof DoubleSlashLink
       */
    constructor(paper, source, target, param) {
        super(paper);
        if (param) {
            this._attr = param;
        }
        else {
            this._attr = constants_1.DiagramConstant.DOUBLE_SLASH_LINK_PARAM;
        }
        joint.shapes.standard.Link.define('tist.DoubleSlashLink', this._attr);
        const link = new joint.shapes.tist.DoubleSlashLink();
        link.addTo(paper.getGraph());
        link.removeProp('tistOrder');
        link.removeProp('tistType');
        link.prop('defaultLabel', constants_1.DiagramConstant.DOUBLE_SLASH_LINK_PARAM.defaultLabel);
        link.prop('labels', constants_1.DiagramConstant.DOUBLE_SLASH_LINK_PARAM.labels);
        link.prop('disabledInteractive', constants_1.DiagramConstant.DOUBLE_SLASH_LINK_PARAM.disabledInteractive);
        const maskParam = JSON.parse(JSON.stringify(constants_1.DiagramConstant.MASK_LINK_PARAM));
        maskParam.id = this._attr.id;
        const mask = new joint.shapes.standard.Link(maskParam);
        mask.source(source);
        mask.target(target);
        mask.prop('attrs2', this._attr.attrs);
        mask.prop('type', 'tist.DoubleSlashLink');
        mask.prop('tistOrder', 2);
        mask.prop('tistType', 'double-slash-link');
        mask.prop('childs', this._attr.childs);
        mask.addTo(paper.getGraph());
        this._linkView.push(mask);
        this._linkView.push(link);
        this._initIcon();
        if (link.prop('linkTools')) {
            this.setLinkTools(link.prop('linkTools'));
        }
        paper.addLink(this);
        this._rightClick();
    }
    /**
       * 擴充旋轉
       *
       * @protected
       * @memberof DoubleSlashLink
       */
    _rotate() {
        super._rotate(1);
        const linkNode = document
            .querySelector(`[model-id="${this.getMajorLink().id}"] [joint-selector="wrapper"]`);
        if (linkNode) {
            const d = linkNode.getAttribute('d').split(' ');
            this.getLinks()[1].source({ x: (+d[1]), y: (+d[2]) });
            this.getLinks()[1].target({ x: (+d[4]), y: (+d[5]) });
        }
    }
}
exports.DoubleSlashLink = DoubleSlashLink;
/**
 * 曾經同居線
 *
 * @export
 * @class BackSlashDashLink
 * @extends {IconLink}
 * @author sungyeh
 */
class BackSlashDashLink extends IconLink {
    /**
       *Creates an instance of BackSlashDashLink.
       * @param {Paper} paper
       * @param {*} source
       * @param {*} target
       * @param {CustomLinkInterface} [param]
       * @memberof BackSlashDashLink
       */
    constructor(paper, source, target, param) {
        super(paper);
        if (param) {
            this._attr = param;
        }
        else {
            this._attr = constants_1.DiagramConstant.BACK_SLASH_LINK_PARAM;
        }
        joint.shapes.standard.Link.define('tist.BackSlashDashLink', this._attr);
        const link = new joint.shapes.tist.BackSlashDashLink();
        link.addTo(paper.getGraph());
        link.removeProp('tistOrder');
        link.removeProp('tistType');
        link.prop('defaultLabel', constants_1.DiagramConstant.BACK_SLASH_LINK_PARAM.defaultLabel);
        link.prop('labels', constants_1.DiagramConstant.BACK_SLASH_LINK_PARAM.labels);
        link.prop('disabledInteractive', constants_1.DiagramConstant.BACK_SLASH_LINK_PARAM.disabledInteractive);
        const maskParam = JSON.parse(JSON.stringify(constants_1.DiagramConstant.MASK_LINK_PARAM));
        maskParam.id = this._attr.id;
        const mask = new joint.shapes.standard.Link(maskParam);
        mask.source(source);
        mask.target(target);
        mask.prop('attrs2', this._attr.attrs);
        mask.prop('type', 'tist.BackSlashDashLink');
        mask.prop('tistOrder', 2);
        mask.prop('tistType', 'back-slash-link');
        mask.prop('childs', this._attr.childs);
        mask.addTo(paper.getGraph());
        this._linkView.push(mask);
        this._linkView.push(link);
        this._initIcon();
        if (link.prop('linkTools')) {
            this.setLinkTools(link.prop('linkTools'));
        }
        paper.addLink(this);
        this._rightClick();
    }
    /**
       * 擴充旋轉
       *
       * @protected
       * @memberof BackSlashDashLink
       */
    _rotate() {
        super._rotate(1);
        const linkNode = document
            .querySelector(`[model-id="${this.getMajorLink().id}"] [joint-selector="wrapper"]`);
        if (linkNode) {
            const d = linkNode.getAttribute('d').split(' ');
            this.getLinks()[1].source({ x: (+d[1]), y: (+d[2]) });
            this.getLinks()[1].target({ x: (+d[4]), y: (+d[5]) });
        }
    }
}
exports.BackSlashDashLink = BackSlashDashLink;
/**
 * 物件抽象類
 *
 * @abstract
 * @class AbsctractElement
 * @author sungyeh
 */
class AbsctractElement {
    /**
     *Creates an instance of AbsctractElement.
     * @param {Paper} paper
     * @param {*} [attr]
     * @memberof AbsctractElement
     */
    constructor(paper, attr) {
        this._paper = paper;
        this._attr = attr;
    }
    /**
     * 取得jointjs element
     *
     * @returns
     * @memberof AbsctractElement
     */
    getElement() {
        return this._element;
    }
    /**
     * 移除物件
     *
     * @memberof AbsctractElement
     */
    remove() {
        this._element.remove();
        this._paper.removeElment(this.getElement().id);
        const self = this;
        this._paper.getLinks().forEach(function (linkView) {
            if (linkView.getMajorLink().target().id && linkView.getMajorLink().target().id === self._element.id) {
                linkView.remove();
            }
            if (linkView.getMajorLink().source().id && linkView.getMajorLink().target().id === self._element.id) {
                linkView.remove();
            }
        });
    }
    /**
     * 設定內文
     *
     * @param {string} content
     * @memberof AbsctractElement
     */
    setContent(content) {
        this._element.attr('label/text', content);
        this.prop('iconContent', content);
    }
    /**
     * prop功能
     *
     * @param {string} key
     * @param {any} [value]
     * @returns
     * @memberof AbsctractElement
     */
    prop(key, value) {
        if (value !== undefined) {
            return this.getElement().prop(key, value);
        }
        else {
            return this.getElement().prop(key);
        }
    }
}
/**
 * 角色element抽象類
 *
 * @abstract
 * @class IconElement
 * @extends {AbsctractElement}
 * @author sungyeh
 */
class IconElement extends AbsctractElement {
    /**
     *Creates an instance of IconElement.
     * @param {Paper} paper
     * @param {BasicIconInterface} [options]
     * @memberof IconElement
     */
    constructor(paper, options) {
        if (options === undefined) {
            options = constants_1.DiagramConstant.BASIC_ICON_PARAM;
        }
        super(paper, options);
        this._nodeEvents = {
            'parent': {
                name: 'symbol4',
                attr: constants_1.DiagramConstant.BASIC_ICON_PARAM.attrs.symbol4.d,
                previous: undefined
            },
            'sibling': {
                name: 'symbol5',
                attr: constants_1.DiagramConstant.BASIC_ICON_PARAM.attrs.symbol5.d,
                previous: undefined
            },
            'twins': {
                name: 'symbol6',
                attr: constants_1.DiagramConstant.BASIC_ICON_PARAM.attrs.symbol6.d,
                previous: undefined
            },
            'spouse': {
                name: 'symbol7',
                attr: constants_1.DiagramConstant.BASIC_ICON_PARAM.attrs.symbol7.d,
                previous: undefined
            },
            'child': {
                name: 'symbol8',
                attr: constants_1.DiagramConstant.BASIC_ICON_PARAM.attrs.symbol8.d,
                previous: undefined
            },
            'adoption': {
                name: 'symbol9',
                attr: constants_1.DiagramConstant.BASIC_ICON_PARAM.attrs.symbol9.d,
                previous: undefined
            }
        };
    }
    /**
     * 顯示節點
     *
     * @param {string} type
     * @param {boolean} param
     * @param {*} [event]
     * @memberof IconElement
     */
    showNode(type, param, event) {
        const self = this;
        const node = document
            .querySelector(`[model-id="${this._element.id}"] [joint-selector="${this._nodeEvents[type].name}"]`);
        const hideEvent = function (view) {
            if (view.model !== self._element) {
                self.showNode(type, false);
            }
            if (view === undefined) {
                self.showNode(type, false);
            }
        };
        if (node) {
            if (param) {
                if (this._nodeEvents[type].previous) {
                    node.removeEventListener('click', this._nodeEvents[type].previous);
                }
                this._nodeEvents[type].previous = event;
                this._element.attr(this._nodeEvents[type].name + '/d', this._nodeEvents[type].attr);
                node.addEventListener('click', this._nodeEvents[type].previous);
                this._paper.getOriginalPaper()
                    .on('blank:pointerclick element:pointerclick link:pointerclick', hideEvent);
            }
            else {
                node.removeEventListener('click', this._nodeEvents[type].previous);
                this._paper.getOriginalPaper()
                    .off('blank:pointerclick element:pointerclick link:pointerclick', hideEvent);
                this._element.attr(this._nodeEvents[type].name + '/d', '');
            }
        }
    }
    /**
     * 是否死亡
     *
     * @param {boolean} param
     * @memberof IconElement
     */
    isDead(param) {
        if (param) {
            this._element.attr('symbol1/d', constants_1.DiagramConstant.BASIC_ICON_PARAM.attrs.symbol1.d);
            this.prop('dead', true);
        }
        else {
            this._element.attr('symbol1/d', '');
            this.prop('dead', false);
        }
    }
    /**
     * 是否為案主
     *
     * @param {boolean} param
     * @memberof IconElement
     */
    isClient(param) {
        if (param) {
            this._element.attr('symbol3/d', constants_1.DiagramConstant.BASIC_ICON_PARAM.attrs.symbol3.d);
            this.prop('client', true);
        }
        else {
            this._element.attr('symbol3/d', '');
            this.prop('client', false);
        }
    }
    /**
     * 是否流產
     *
     * @param {boolean} param
     * @memberof IconElement
     */
    isAborticide(param) {
        this.isDead(param);
        if (param) {
            this._element.attr('symbol2/d', constants_1.DiagramConstant.BASIC_ICON_PARAM.attrs.symbol2.d);
            this.prop('aborticide', true);
        }
        else {
            this._element.attr('symbol2/d', '');
            this.prop('aborticide', false);
        }
    }
    /**
     * click事件
     *
     * @param {*} event
     * @memberof IconElement
     */
    onClick(event) {
        const self = this;
        const node = document.querySelector(`svg [model-id="${this._element.id}"] [joint-selector="body"]`);
        node.addEventListener('click', function () {
            event(self);
        });
        self._clickEvent = event;
    }
    /**
     * 設定下方備註
     *
     * @param {string} note
     * @memberof IconElement
     */
    setNote(note) {
        const length = (note.split('\n')).length;
        this._note.attr('label/text', note);
        this._note.resize(constants_1.DiagramConstant.OFFSET_PARAM.icon * 2, 15 * length);
        this.prop('iconNote', note);
    }
    /**
     * 擴充remove
     *
     * @memberof IconElement
     */
    remove() {
        super.remove();
        this._note.remove();
    }
    /**
     * 複製屬性
     *
     * @private
     * @param {*} source
     * @memberof IconElement
     */
    _copyProp(source) {
        source.prop('aborticide') ? this.isAborticide(true) : this.isAborticide(false);
        source.prop('client') ? this.isClient(true) : this.isClient(false);
        source.prop('dead') ? this.isDead(true) : this.isDead(false);
        source.prop('iconContent') ? this.setContent(source.prop('iconContent')) : this.setContent('');
        source.prop('iconNote') ? this.setNote(source.prop('iconNote')) : this.setNote('');
    }
    /**
     * 顯示其餘圖示
     *
     * @protected
     * @memberof IconElement
     */
    _appendMarkup() {
        for (let i = 1; i <= 9; i++) {
            const hasMark = this._element.markup.find(function (mark) {
                return mark.selector === `symbol${i}`;
            });
            if (hasMark === undefined) {
                this._element.markup.push({ tagName: 'path', selector: `symbol${i}` });
            }
            this._element.attr(`symbol${i}/d`, '');
        }
    }
    /**
     * 初始化圖示
     *
     * @protected
     * @memberof IconElement
     */
    _initMark() {
        if (this.prop('dead')) {
            this.isDead(true);
        }
        if (this.prop('client')) {
            this.isClient(true);
        }
        if (this.prop('aborticide')) {
            this.isAborticide(true);
        }
    }
    /**
     * 顯示文字區塊
     *
     * @protected
     * @memberof IconElement
     */
    _appendTextArea() {
        const rectangle = new joint.shapes.standard.Rectangle();
        rectangle.resize(constants_1.DiagramConstant.OFFSET_PARAM.icon * 2, 20);
        rectangle.position(this._element.position().x, this._element.position().y + 60);
        rectangle.attr('body/fill', 'none');
        rectangle.attr('body/stroke', 'none');
        rectangle.addTo(this._paper.getGraph());
        this._note = rectangle;
        this._element.on('change:position', function (view) {
            rectangle.position(view.position().x, view.position().y + 60);
        });
        if (this.prop('iconNote')) {
            this.setNote(this.prop('iconNote'));
        }
        const self = this;
        rectangle.on('change:position', function (view) {
            self._element.position(view.position().x, view.position().y - 60);
        });
    }
    /**
     * 實作新增前hook
     *
     * @protected
     * @memberof IconElement
     */
    _beforeAdd() {
        this._appendMarkup();
        this._initMark();
        this._appendTextArea();
    }
    /**
     * 實作新增後hook
     *
     * @protected
     * @memberof IconElement
     */
    _afterAdd() {
        this.prop('sibling', [this.getElement().id]);
        const self = this;
        if (this.prop('iconContent')) {
            this.setContent(this.prop('iconContent'));
        }
        this._paper.addElement(this);
        this._rightClick();
        this.onClick(function (polygon) {
            polygon.showNode('parent', true, function () {
            	//已有父母則不動作
                if (self._paper.findByModelId(polygon.prop('parents')) === undefined) {
                    const malePosition = utils_1.DiagramUtils.positionHarmony({
                        x: polygon.getElement().position().x - constants_1.DiagramConstant.OFFSET_PARAM.icon * 4,
                        y: polygon.getElement().position().y - constants_1.DiagramConstant.OFFSET_PARAM.icon * 6
                    }, self._paper);
                    const femalePosition = utils_1.DiagramUtils.positionHarmony({
                        x: polygon.getElement().position().x + constants_1.DiagramConstant.OFFSET_PARAM.icon * 4,
                        y: polygon.getElement().position().y - constants_1.DiagramConstant.OFFSET_PARAM.icon * 6
                    }, self._paper);
                    const left = new Male(self._paper, malePosition);
                    const right = new Female(self._paper, femalePosition);
                    const link = new NormalLink(self._paper, left.getElement(), right.getElement());
                    const leftSpouses = left.prop('spouses');
                    leftSpouses.push(link.getMajorLink().id);
                    const sourcePos = {
                        x: (malePosition.x + femalePosition.x) / 2 + constants_1.DiagramConstant.OFFSET_PARAM.icon,
                        y: malePosition.y + constants_1.DiagramConstant.OFFSET_PARAM.icon
                    };
                    link.prop('childs', [polygon.getElement().id]);
                    left.prop('spouses', leftSpouses);
                    right.prop('spouses', [link.getMajorLink().id]);
                    left.prop('spouseLevel', 2);
                    /*
                    const childLink = new NormalLink(self._paper,polygon.getElement(), sourcePos);
                    childLink.getMajorLink().target(sourcePos);
                    //childLink.getMajorLink().router('orthogonal');
                    //放link 右鍵選單(親生領養刪除)
                    childLink.prop('sourceLink', childLink.id);
                    childLink.prop('parents', childLink.getMajorLink().id);
                    */
                    
                    // 有手足情況
                    const siblings = polygon.prop('sibling');
                    if (siblings.length > 0) {
                        link.prop('childs', siblings);
                    }
                    siblings.forEach(function (siblingId) {
                        const sibling = self._paper.findByModelId(siblingId);
                        const childLink = self._paper.findByModelId(sibling.prop('childLink')) === undefined ?
                            new NormalLink(self._paper,sibling.getElement(), sourcePos) :
                            self._paper.findByModelId(sibling.prop('childLink'));
                        childLink.getMajorLink().target(sourcePos);
                        //childLink.getMajorLink().router('orthogonal');
                        childLink.prop('sourceLink', link.getMajorLink().id);
                        childLink.prop('parents', childLink.getMajorLink().id);
                        if (sibling.getElement().position().x + constants_1.DiagramConstant.OFFSET_PARAM.icon !== sourcePos.x) {
                            const vertices = [
                                {
                                    x: sibling.getElement().position().x + constants_1.DiagramConstant.OFFSET_PARAM.icon,
                                    y: (sibling.getElement().position().y + sourcePos.y) / 2
                                },
                                {
                                    x: sourcePos.x, y: (sibling.getElement().position().y + sourcePos.y) / 2
                                }
                            ];
                            childLink.getMajorLink().vertices(vertices);
                        }
                        utils_1.DiagramUtils.bindChildEvent(left.getElement(), right.getElement(), sibling.getElement(), link.getMajorLink(), childLink.getMajorLink());
                        sibling.prop('childLink', childLink.getMajorLink().id);
                        sibling.prop('parents', link.getMajorLink().id);
                        // 孿生
                        const twins = sibling.prop('twins');
                        if (twins.length > 0) {
                            twins.forEach(function (twinsId) {
                                const twinsHead = self._paper.findByModelId(twins[0]);
                                const parent = self._paper.findByModelId(twinsHead.prop('parents'));
                                const childLink = self._paper.findByModelId(twinsHead.prop('childLink'));
                                if (twinsId !== twinsHead.getElement().id) {
                                    const twinsObj = self._paper.findByModelId(twinsId);
                                    const twinsLink = self._paper.findByModelId(twinsObj.prop('twinsLink'));
                                    utils_1.DiagramUtils.bindTwinsEvent(self._paper, parent, twinsHead, twinsLink, childLink);
                                }
                            });
                        }
                    });
                   	
                }
            });
            polygon.showNode('sibling', true, function () {
            	let siblings = polygon.prop('sibling').length > 0 ?
            		polygon.prop('sibling') : [polygon.getElement().id];
                    siblings = siblings.filter(function (siblingId) {
                    return self._paper.findByModelId(siblingId) !== undefined;
                });
                const siblingXArr = siblings.map(function (siblingId) {
                    return self._paper.findByModelId(siblingId).getElement().position().x;
                });
                const newSiblingPosition = utils_1.DiagramUtils.positionHarmony({
                    x: Math.max.apply(null, siblingXArr) + constants_1.DiagramConstant.OFFSET_PARAM.icon * 8,
                    y: polygon.getElement().position().y
                }, self._paper);
                const newSibling = new Male(self._paper, newSiblingPosition);
                siblingXArr.push(newSibling.getElement().position().x);
                siblings.push(newSibling.getElement().id);

                const sourcePos = {
                    x: (Math.max.apply(null, siblingXArr) +
                        Math.min.apply(null, siblingXArr)) / 2 + constants_1.DiagramConstant.OFFSET_PARAM.icon,
                    y: self._paper.findByModelId(siblings[0])
                        .getElement().position().y - constants_1.DiagramConstant.OFFSET_PARAM.icon * 2
                };
         
                siblings.forEach(function (siblingId, index) {
                    const sibling = self._paper.findByModelId(siblingId);
                    let childLink;
                    if (self._paper.findByModelId(sibling.prop('childLink'))) {
                        childLink = self._paper.findByModelId(sibling.prop('childLink'));
                        childLink.getMajorLink().target(sourcePos);
                    }
                    else {
                        childLink = new NormalLink(self._paper, sibling.getElement(), sourcePos);
                    }
                    childLink.getMajorLink().router('orthogonal');
                    const vertices = [
                        {
                            x: sibling.getElement().position().x + constants_1.DiagramConstant.OFFSET_PARAM.icon,
                            y: sourcePos.y
                        }
                    ];
                    sibling.getElement().position().x + constants_1.DiagramConstant.OFFSET_PARAM.icon === sourcePos.x ?
                        childLink.getMajorLink().vertices([]) :
                        childLink.getMajorLink().vertices(vertices);
                    const parent = self._paper.findByModelId(polygon.prop('parents'));
                    if (parent) {
                        // 婚生
                        if (parent instanceof Male ||
                            parent instanceof Female) {
                            const sourcePos = {
                                x: parent.getElement().position().x + constants_1.DiagramConstant.OFFSET_PARAM.icon,
                                y: parent.getElement().position().y + constants_1.DiagramConstant.OFFSET_PARAM.icon
                            };
                            if (sibling.getElement().position().x + constants_1.DiagramConstant.OFFSET_PARAM.icon !== sourcePos.x) {
                                const vertices = [
                                    {
                                        //x: sibling.getElement().position().x + constants_1.DiagramConstant.OFFSET_PARAM.icon,
                                    	x: sourcePos.x,
                                    	y: (sibling.getElement().position().y + sourcePos.y) / 2
                                    },
                                    {
                                        x: sourcePos.x,
                                        y: (sibling.getElement().position().y + sourcePos.y) / 2
                                    }
                                ];
                                childLink.getMajorLink().vertices(vertices);
                            }
                            childLink.getMajorLink().target(parent.getElement());
                            utils_1.DiagramUtils.bindIllegitimateChild(parent.getElement(), sibling.getElement(), childLink.getMajorLink());
                        }
                        else {
                            // 非婚生
                            const sourceLink = self._paper.findByModelId(polygon.prop('parents'));
                            let left = sourceLink.getMajorLink().source().id;
                            left = self._paper.findByModelId(left).getElement();
                            let right = sourceLink.getMajorLink().target().id;
                            right = self._paper.findByModelId(right).getElement();
                            const sourcePos = {
                                x: (left.position().x + right.position().x) / 2 + constants_1.DiagramConstant.OFFSET_PARAM.icon,
                                y: (left.position().y + right.position().y) / 2 +
                                    utils_1.DiagramUtils.anchorOffset(sourceLink.getMajorLink().target()) *
                                        constants_1.DiagramConstant.OFFSET_PARAM.icon
                            };
                            childLink.getMajorLink().target(sourcePos);
                            if (sibling.getElement().position().x + constants_1.DiagramConstant.OFFSET_PARAM.icon !== sourcePos.x) {
                                const vertices = [
                                    {
                                        x: sibling.getElement().position().x + constants_1.DiagramConstant.OFFSET_PARAM.icon,
                                        y: (sibling.getElement().position().y + sourcePos.y) / 2
                                    },
                                    {
                                        x: sourcePos.x,
                                        y: (sibling.getElement().position().y + sourcePos.y) / 2
                                    }
                                ];
                                childLink.getMajorLink().vertices(vertices);
                            }
                            if (index !== 0) {
                                utils_1.DiagramUtils.bindChildEvent(left, right, newSibling.getElement(), sourceLink.getMajorLink(), childLink.getMajorLink());
                            }
                            childLink.prop('sourceLink', sourceLink.getMajorLink().id);
                            sourceLink.prop('childs', siblings);
                        }
                    }
                    sibling.prop('sibling', siblings);
                    sibling.prop('childLink', childLink.getMajorLink().id);
                });
            });
            polygon.showNode('twins', true, function () {
                let twins = polygon.prop('twins').length > 0 ?
                    polygon.prop('twins') : [polygon.getElement().id];
                twins = twins.filter(function (twinsId) {
                    return self._paper.findByModelId(twinsId) !== undefined;
                });
                const twinsXArr = twins.map(function (twinsId) {
                    return self._paper.findByModelId(twinsId).getElement().position().x;
                });
                const newTwinsPosition = utils_1.DiagramUtils.positionHarmony({
                    x: Math.max.apply(null, twinsXArr) + constants_1.DiagramConstant.OFFSET_PARAM.icon * 4,
                    y: polygon.getElement().position().y
                }, self._paper);
                const newTwins = new Male(self._paper, newTwinsPosition);
                const twinsHead = self._paper.findByModelId(twins[0]);
                const parent = self._paper.findByModelId(twinsHead.prop('parents'));
                let targetPos = {
                    x: twinsHead.getElement().position().x + constants_1.DiagramConstant.OFFSET_PARAM.icon,
                    y: twinsHead.getElement().position().y - constants_1.DiagramConstant.OFFSET_PARAM.icon * 2
                };
                let childLink = self._paper.findByModelId(twinsHead.prop('childLink'));
                if (parent) {
                    // 婚生
                    if (parent instanceof Male ||
                        parent instanceof Female) {
                        targetPos.y = (parent.getElement().position().y + twinsHead.getElement().position().y) / 2;
                    }
                    else {
                        // 非婚生
                        if (childLink.getMajorLink().vertices().length > 0) {
                            targetPos = childLink.getMajorLink().vertices()[0];
                        }
                        else {
                            targetPos.y =
                                (childLink.getMajorLink().target().y + twinsHead.getElement().position().y) / 2;
                        }
                    }
                }
                else {
                    if (twinsHead.prop('childLink') === '') {
                        childLink = new NormalLink(self._paper, polygon.getElement(), targetPos);
                        twinsHead.prop('childLink', childLink.getMajorLink().id);
                    }
                }
                const twinsLink = new NormalLink(self._paper, newTwins.getElement(), targetPos);
                newTwins.prop('twinsLink', twinsLink.getMajorLink().id);
                twins.push(newTwins.getElement().id);
                twins.forEach(function (twinsId) {
                    const twinsObj = self._paper.findByModelId(twinsId);
                    if (twinsObj) {
                        twinsObj.prop('twins', twins);
                    }
                });
                utils_1.DiagramUtils.bindTwinsEvent(self._paper, parent, twinsHead, twinsLink, childLink);
            });
            polygon.showNode('spouse', true, function () {
            	const ele = self._paper.findByModelId(self.getElement().id);
            	let orgspouses = ele.prop('spouses');
            	let spouseLevel = 1;
                orgspouses = orgspouses.filter(function (spouses) {
                	return self._paper.findByModelId(spouses) !== undefined;
                });
                const spousesXArr = orgspouses.map(function (spouses) {
                	spouseLevel ++;
                	const sourceLink = self._paper.findByModelId(spouses).getMajorLink();
                	const right = self._paper.findByModelId(sourceLink.target().id).getElement();
                	return right.position().x;
                });
                var tempx = ele.getElement().position().x + constants_1.DiagramConstant.OFFSET_PARAM.icon * 8;
                var tempy = ele.getElement().position().y;
                var tempXFlag = false;
                var tempLevel = spouseLevel;
                for(var i=0;i<=spousesXArr.length;i++){
                	tempx = ele.getElement().position().x+constants_1.DiagramConstant.OFFSET_PARAM.icon * 8*(i+1);
                	tempXFlag = false;
                	for(var j=0;j<spousesXArr.length;j++){
                		if(Math.abs(Math.floor(spousesXArr[j])-Math.floor(tempx))<constants_1.DiagramConstant.OFFSET_PARAM.icon){
                			tempXFlag = true;
                			break;
                		}
                	}
                	if(!tempXFlag){
                		tempLevel = i+1;
                		break;
                	}
                };
                //by Nick 2023.6.8
                /*
                if((tempLevel % 3)==1){
                	tempy = tempy;
                }else if((tempLevel % 3)==2){
                	tempy = tempy-constants_1.DiagramConstant.OFFSET_PARAM.icon;
                }else if((tempLevel % 3)==0){
                	tempy = tempy+constants_1.DiagramConstant.OFFSET_PARAM.icon;
                }
                */
                //===end  by Nick
                const position = utils_1.DiagramUtils.positionHarmony({
                    x: tempx,//ele.getElement().position().x + constants_1.DiagramConstant.OFFSET_PARAM.icon * 8 * spouseLevel,
                    y: tempy	//ele.getElement().position().y
                }, self._paper);
                const right = ele.prop('tistType') === 'male' ?
                    new Female(ele._paper, position) : new Male(ele._paper, position);
                const link = new NormalLink(ele._paper, ele.getElement(), right.getElement());
                link.getMajorLink().source(ele.getElement(), utils_1.DiagramUtils.getAnchor(tempLevel % 3));
                //link.getMajorLink().target(right.getElement(), utils_1.DiagramUtils.getAnchor(tempLevel % 3));
                link.getMajorLink().target(right.getElement(), utils_1.DiagramUtils.getAnchor(1));
                const leftSpouses = ele.prop('spouses');
                leftSpouses.push(link.getMajorLink().id);
                spouseLevel++;
                ele.prop('spouseLevel', spouseLevel);
                link.prop('childs', []);
                ele.prop('spouses', leftSpouses);
                right.prop('spouses', [link.getMajorLink().id]);
            });
            polygon.showNode('child', true, function () {
                const spouses = polygon.prop('spouses');
                spouses.forEach(function (id) {
                    const sourceId = self._paper.findByModelId(id);
                    if(sourceId !== undefined){
                    	const sourceLink = self._paper.findByModelId(id).getMajorLink();
                    	const left = self._paper.findByModelId(sourceLink.source().id).getElement();
                    	const right = self._paper.findByModelId(sourceLink.target().id).getElement();
                    	let orgChilds = sourceLink.prop('childs');
                    		orgChilds = orgChilds.filter(function (child) {
                    		return self._paper.findByModelId(child) !== undefined;
                    	});
                    	const childXArr = orgChilds.map(function (child) {
                    		return self._paper.findByModelId(child).getElement().position().x;
                    	});
                    	const position = utils_1.DiagramUtils.positionHarmony({
                    		x: childXArr.length > 0 ?
                    			Math.max.apply(null, childXArr) + constants_1.DiagramConstant.OFFSET_PARAM.icon * 8 :
                    			(left.position().x + right.position().x) / 2,
                    		y: (left.position().y + right.position().y) / 2 + constants_1.DiagramConstant.OFFSET_PARAM.icon * 6
                    	}, self._paper);
                    	const child = new Male(self._paper, position);
                    	orgChilds.push(child.getElement().id);
                    	orgChilds.forEach(function (siblingId) {
                    		const sibling = self._paper.findByModelId(siblingId);
                    		sibling.prop('sibling', orgChilds);
                    	});
                    	const sourcePos = {
                    		x: (left.position().x + right.position().x) / 2 + constants_1.DiagramConstant.OFFSET_PARAM.icon,
                    		y: (left.position().y + right.position().y) / 2 +
                            	utils_1.DiagramUtils.anchorOffset(sourceLink.target()) * constants_1.DiagramConstant.OFFSET_PARAM.icon
                    	};
                    	const childLink = new NormalLink(self._paper, child.getElement(), sourcePos);
                    	//childLink.getMajorLink().router('orthogonal');
                    	childLink.prop('sourceLink', sourceLink.id);
                    	sourceLink.prop('childs', orgChilds);
                    	childLink.prop('parents', sourceLink.id);
                    	child.prop('parents', sourceLink.id);
                    	child.prop('childLink', childLink.getMajorLink().id);
                    	if (child.getElement().position().x + constants_1.DiagramConstant.OFFSET_PARAM.icon !== sourcePos.x) {
                    		const vertices = [
                    			{
                    				x: child.getElement().position().x + constants_1.DiagramConstant.OFFSET_PARAM.icon,
                    				y: (child.getElement().position().y + sourcePos.y) / 2
                    			},
                    			{
                    				x: sourcePos.x, y: (child.getElement().position().y + sourcePos.y) / 2
                    			}
                    		];
                    		childLink.getMajorLink().vertices(vertices);
                    	}
                    	utils_1.DiagramUtils.bindChildEvent(left, right, child.getElement(), sourceLink, childLink.getMajorLink());
                    }
                });
            });
            polygon.showNode('adoption', true, function () {
            	//======update by Nick 2022 =====
            	let orgAdoption = polygon.prop('adoption');
                    orgAdoption = orgAdoption.filter(function (adoption) {
                    return self._paper.findByModelId(adoption) !== undefined;
                });
                const adoptionXArr = orgAdoption.map(function (adoption) {
                    return self._paper.findByModelId(adoption).getElement().position().x;
                });
                var tempx = polygon.getElement().position().x;
                var tempXFlag = false;
                for(var i=0;i<adoptionXArr.length;i++){
                	tempx = polygon.getElement().position().x+constants_1.DiagramConstant.OFFSET_PARAM.icon * 9*(i+1);
                	tempXFlag = false;
                	for(var j=0;j<adoptionXArr.length;j++){
                		if(adoptionXArr[j]==tempx){
                			tempXFlag = true;
                			break;
                		}
                	}
            		if(!tempXFlag){
            			break;
            		}
            	};
                //====== end update =====
                const position = utils_1.DiagramUtils.positionHarmony({
                	x: tempx,
                	/*
                    x: adoptionXArr.length > 0 ?
                        Math.max.apply(null, adoptionXArr) + constants_1.DiagramConstant.OFFSET_PARAM.icon * 9 :
                        polygon.getElement().position().x,
                        */
                    y: polygon.getElement().position().y + constants_1.DiagramConstant.OFFSET_PARAM.icon * 6
                }, self._paper);
                const adoption = new Male(self._paper, position);
                const link = new NormalLink(self._paper, adoption.getElement(),polygon.getElement());
                //link.getMajorLink().router('orthogonal');	/* by Nick */
                orgAdoption.push(adoption.getElement().id);
                orgAdoption.forEach(function (siblingId) {
                    const sibling = self._paper.findByModelId(siblingId);
                    sibling.prop('sibling', orgAdoption);
                });
                if (polygon.getElement().position().x !== adoption.getElement().position().x) {
                    const vertices = [
                        {
                            x: adoption.getElement().position().x + constants_1.DiagramConstant.OFFSET_PARAM.icon,
                            y: (adoption.getElement().position().y + polygon.getElement().position().y) / 2
                        },
                        {
                            x: polygon.getElement().position().x + constants_1.DiagramConstant.OFFSET_PARAM.icon,
                            y: (adoption.getElement().position().y + polygon.getElement().position().y) / 2
                        }
                    ];
                    link.getMajorLink().vertices(vertices);
                }
                       
                utils_1.DiagramUtils.bindIllegitimateChild(polygon.getElement(), adoption.getElement(), link.getMajorLink());
                adoption.prop('parents', polygon.getElement().id);
                link.prop('parents', polygon.getElement().id);
                polygon.prop('adoption', orgAdoption);
                adoption.prop('childLink', link.getMajorLink().id);
                
            });
        });
    }
    /**
     * 右鍵事件
     *
     * @private
     * @memberof IconElement
     */
    _rightClick() {
        const self = this;
        const node = document.querySelector(`[model-id="${this._element.id}"]`);
        let menu;
        const lastContextMenu = {};
        node.addEventListener('contextmenu', function (mouse) {
            if (menu) {
                menu.remove();
            }
            menu = document.createElement('table');
            menu.style.position = 'absolute';
            menu.style.background = 'white';
            menu.border = '1px';
            menu.setAttribute('frame', 'box');
            menu.setAttribute('rules', 'none');
            menu.style.position = 'absolute';
            menu.style.boxShadow = '2px 2px 2px lightgrey';
            const menulist = [
                {
                    title: function () {
                        return '男性';
                    },
                    event: function () {
                        const origin = self.getElement();
                        const changeto = new Male(self._paper, origin.position());
                        if (self._clickEvent) {
                            changeto.onClick(self._clickEvent);
                        }
                        self._paper.getLinks().forEach(function (link) {
                            const target = link.getMajorLink().target();
                            const source = link.getMajorLink().source();
                            if (target.id === self.getElement().id) {
                                link.getMajorLink().target(changeto.getElement(), { anchor: target.anchor });
                            }
                            if (source.id === self.getElement().id) {
                                link.getMajorLink().source(changeto.getElement(), { anchor: source.anchor });
                            }
                        });
                        changeto._copyProp(origin);
                        self.remove();
                        self.getElement().id = changeto.getElement().id;
                    }
                },
                {
                    title: function () {
                        return '女性';
                    },
                    event: function () {
                        const origin = self.getElement();
                        const changeto = new Female(self._paper, origin.position());
                        if (self._clickEvent) {
                            changeto.onClick(self._clickEvent);
                        }
                        self._paper.getLinks().forEach(function (link) {
                            const target = link.getMajorLink().target();
                            const source = link.getMajorLink().source();
                            if (target.id === self.getElement().id) {
                                link.getMajorLink().target(changeto.getElement(), { anchor: target.anchor });
                            }
                            if (source.id === self.getElement().id) {
                                link.getMajorLink().source(changeto.getElement(), { anchor: source.anchor });
                            }
                        });
                        changeto._copyProp(origin);
                        self.remove();
                        self.getElement().id = changeto.getElement().id;
                    }
                },
                {
                    title: function () {
                        return '不詳';
                    },
                    event: function () {
                        const origin = self.getElement();
                        const changeto = new Unknown(self._paper, origin.position());
                        if (self._clickEvent) {
                            changeto.onClick(self._clickEvent);
                        }
                        self._paper.getLinks().forEach(function (link) {
                            const target = link.getMajorLink().target();
                            const source = link.getMajorLink().source();
                            if (target.id === self.getElement().id) {
                                link.getMajorLink().target(changeto.getElement(), { anchor: target.anchor });
                            }
                            if (source.id === self.getElement().id) {
                                link.getMajorLink().source(changeto.getElement(), { anchor: source.anchor });
                            }
                        });
                        changeto._copyProp(origin);
                        self.remove();
                        self.getElement().id = changeto.getElement().id;
                    }
                },
                {
                    title: function () {
                        return '胎兒';
                    },
                    event: function () {
                        const origin = self.getElement();
                        const changeto = new Fetus(self._paper, origin.position());
                        if (self._clickEvent) {
                            changeto.onClick(self._clickEvent);
                        }
                        self._paper.getLinks().forEach(function (link) {
                            const target = link.getMajorLink().target();
                            const source = link.getMajorLink().source();
                            if (target.id === self.getElement().id) {
                                link.getMajorLink().target(changeto.getElement(), { anchor: target.anchor });
                            }
                            if (source.id === self.getElement().id) {
                                link.getMajorLink().source(changeto.getElement(), { anchor: source.anchor });
                            }
                        });
                        changeto._copyProp(origin);
                        self.remove();
                        self.getElement().id = changeto.getElement().id;
                    }
                },
                {
                    title: function () {
                        return self.prop('dead') ? '未死亡' : '死亡';
                    },
                    event: function () {
                        self.prop('dead') ? self.isDead(false) : self.isDead(true);
                    }
                },
                {
                    title: function () {
                        return self.prop('aborticide') ? '未流產' : '流產';
                    },
                    event: function () {
                        self.prop('aborticide') ? self.isAborticide(false) : self.isAborticide(true);
                    }
                },
                {
                    title: function () {
                        return self.prop('client') ? '非案主' : '案主';
                    },
                    event: function () {
                        self.prop('client') ? self.isClient(false) : self.isClient(true);
                    }
                },
                {
                    title: function () {
                        return '修改內文';
                    },
                    event: function () {
                        const textDiv = document.createElement('div');
                        textDiv.style.position = 'absolute';
                        textDiv.border = '1px';
                        textDiv.style.left = menu.style.left;
                        textDiv.style.top = menu.style.top;
                        const text = document.createElement('textarea');
                        text.rows = 4;
                        text.cols = 30;
                        //text.style="font-size:23px;color:blue;"
                        text.value = self.prop('iconContent') === undefined ? '' : self.prop('iconContent');
                        const buttonDiv = document.createElement('div');
                        const button = document.createElement('button');
                        button.innerHTML = '確認';
                        const cancle = document.createElement('button');
                        cancle.innerHTML = '取消';
                        textDiv.appendChild(text);
                        buttonDiv.appendChild(button);
                        buttonDiv.appendChild(cancle);
                        textDiv.appendChild(buttonDiv);
                        document.body.appendChild(textDiv);
                        button.onclick = function () {
                            if (text.value.length >= 0) {
                                self.setContent(text.value);
                                textDiv.remove();
                            }
                        };
                        cancle.onclick = function () {
                            textDiv.remove();
                        };
                    }
                },
                {
                    title: function () {
                        return '修改備註';
                    },
                    event: function () {
                        const textDiv = document.createElement('div');
                        textDiv.style.position = 'absolute';
                        textDiv.border = '1px';
                        textDiv.style.left = menu.style.left;
                        textDiv.style.top = menu.style.top;
                        const text = document.createElement('textarea');
                        text.rows = 4;
                        text.cols = 30;
                        text.value = self.prop('iconNote') === undefined ? '' : self.prop('iconNote');
                        const buttonDiv = document.createElement('div');
                        const button = document.createElement('button');
                        button.innerHTML = '確認';
                        const cancle = document.createElement('button');
                        cancle.innerHTML = '取消';
                        textDiv.appendChild(text);
                        buttonDiv.appendChild(button);
                        buttonDiv.appendChild(cancle);
                        textDiv.appendChild(buttonDiv);
                        document.body.appendChild(textDiv);
                        button.onclick = function () {
                            if (text.value.length >= 0) {
                                self.setNote(text.value);
                                textDiv.remove();
                            }
                        };
                        cancle.onclick = function () {
                            textDiv.remove();
                        };
                    }
                },
                {
                    title: function () {
                        return '刪除';
                    },
                    event: function () {
                        self.remove();
                    }
                }
            ];
            menulist.forEach(function (content) {
                const tr = document.createElement('tr');
                const td = document.createElement('td');
                td.innerHTML = content.title();
                td.style.borderRadius = '2px';
                td.addEventListener('mouseover', function () {
                    td.style.background = 'cornflowerblue';
                });
                td.addEventListener('mouseout', function () {
                    td.style.background = 'white';
                });
                td.setAttribute('tistType', self.prop('tistType'));
                td.addEventListener('mouseup', content.event);
                tr.appendChild(td);
                menu.appendChild(tr);
            });
            document.body.appendChild(menu);
            const menuOffset = function (ev) {
                const x = document.documentElement.scrollLeft + ev.clientX;
                //const y = document.documentElement.scrollTop + ev.clientY;
                const y = mouse.pageY;
                const html = document.documentElement;
                const browserWidth = html.clientWidth;
                // const browserHeight = html.clientHeight;
                const menuWidth = menu.offsetWidth;
                // const menuHeight = menu.offsetHeight;
                return {
                    left: (x + menuWidth) > browserWidth ? (browserWidth - menuWidth) : x,
                    top: y
                };
            };
            menu.style.left = `${menuOffset(mouse).left}px`;
            menu.style.top = `${menuOffset(mouse).top}px`;
            lastContextMenu.x = mouse.pageX;
            lastContextMenu.y = mouse.pageY;
        });
        document.addEventListener('contextmenu', function (mouse) {
            if (mouse.pageX !== lastContextMenu.x && mouse.pageY !== lastContextMenu.y) {
                if (menu) {
                    menu.remove();
                }
            }
        });
        document.addEventListener('click', function (mouse) {
            if (mouse.pageX !== lastContextMenu.x && mouse.pageY !== lastContextMenu.y) {
                if (menu) {
                    menu.remove();
                }
            }
        });
    }
}
/**
 * 男性物件
 *
 * @export
 * @class Male
 * @extends {IconElement}
 * @author sungyeh
 */
class Male extends IconElement {
    /**
       *Creates an instance of Male.
       * @param {Paper} paper
       * @param {*} position
       * @param {BasicIconInterface} [options]
       * @memberof Male
       */
    constructor(paper, position, options) {
        super(paper, options);
        this._attr.tistType = 'male';
        this._attr.attrs.body = {
            fill: '#B7FFB7',//'#05FD00',
            refPoints: '0,0 50,0 50,50 0,50',
            strokeWidth: '2'
        };
        this._element = new joint.shapes.standard.Polygon(this._attr);
        this._element.position(position.x, position.y);
        this._beforeAdd();
        this._element.addTo(this._paper.getGraph());
        this._afterAdd();
    }
}
exports.Male = Male;
/**
 * 女性物件
 *
 * @export
 * @class Female
 * @extends {IconElement}
 * @author sungyeh
 */
class Female extends IconElement {
    /**
       *Creates an instance of Female.
       * @param {Paper} paper
       * @param {*} position
       * @param {BasicIconInterface} [options]
       * @memberof Female
       */
    constructor(paper, position, options) {
        super(paper, options);
        this._attr.tistType = 'female';
        this._attr.attrs.body = {
            fill: '#FECFCF',//'#FDABAB',
            strokeWidth: '2'
        };
        this._element = new joint.shapes.standard.Circle(this._attr);
        this._element.position(position.x, position.y);
        this._beforeAdd();
        this._element.addTo(this._paper.getGraph());
        this._afterAdd();
    }
}
exports.Female = Female;
/**
 * 胎兒物件
 *
 * @export
 * @class Fetus
 * @extends {IconElement}
 * @author sungyeh
 */
class Fetus extends IconElement {
    /**
       *Creates an instance of Fetus.
       * @param {Paper} paper
       * @param {*} position
       * @param {BasicIconInterface} [options]
       * @memberof Fetus
       */
    constructor(paper, position, options) {
        super(paper, options);
        this._attr.tistType = 'fetus';
        this._attr.attrs.body = {
            fill: 'yellow',
            refPoints: '0,50 25,0 50,50',
            strokeWidth: '2'
        };
        this._element = new joint.shapes.standard.Polygon(this._attr);
        this._element.position(position.x, position.y);
        this._beforeAdd();
        this._element.addTo(this._paper.getGraph());
        this._afterAdd();
    }
}
exports.Fetus = Fetus;
/**
 * 角色不詳物件
 *
 * @export
 * @class Unknown
 * @extends {IconElement}
 * @author sungyeh
 */
class Unknown extends IconElement {
    /**
       *Creates an instance of Unknown.
       * @param {Paper} paper
       * @param {*} position
       * @param {BasicIconInterface} [options]
       * @memberof Unknown
       */
    constructor(paper, position, options) {
        super(paper, options);
        this._attr.tistType = 'unknown';
        this._attr.attrs.body = {
            fill: '#00DBFF',
            refPoints: '0,25 25,0 50,25 25,50',
            strokeWidth: '2'
        };
        this._element = new joint.shapes.standard.Polygon(this._attr);
        this._element.position(position.x, position.y);
        this._beforeAdd();
        this._element.addTo(this._paper.getGraph());
        this._afterAdd();
    }
}
exports.Unknown = Unknown;
/**
 * 生活圈物件
 *
 * @export
 * @class LifeSphere
 * @extends {AbsctractElement}
 * @author sungyeh
 */
class LifeSphere extends AbsctractElement {
    /**
     *Creates an instance of LifeSphere.
     * @param {Paper} paper
     * @param {*} position
     * @param {PolygonInterface} [options]
     * @memberof LifeSphere
     */
    constructor(paper, position, options) {
        if (options === undefined) {
            options = constants_1.DiagramConstant.LIFE_SPHERE_PARAM;
        }
        super(paper, options);
        const polygon = new joint.shapes.standard.Polygon(this._attr);
        polygon.position(position.x, position.y);
        polygon.addTo(paper.getGraph());
        polygon.toBack();
        this._element = polygon;
        this._paper = paper;
        this._circles = [];
        let ports = [];
        const node = this._getPolygonNode();
        if (polygon.prop('newRefPoints')) {
            node.setAttribute('points', `${polygon.prop('newRefPoints')}`);
        }
        const offset = {
            x: constants_1.DiagramConstant.OFFSET_PARAM.lifeSphereCircle / 2,
            y: constants_1.DiagramConstant.OFFSET_PARAM.lifeSphereCircle / 2
        };
        ports = utils_1.DiagramUtils.toXYArray(node.getAttribute('points').split(' '));
        const paperNode = document.getElementById(`${this._paper.getOriginalPaper().svg.id}`);
        const pageOffset = {
            x: paperNode.parentNode.offsetLeft,
            y: paperNode.parentNode.offsetTop
        };
        // 產生圓形port供變形
        this._initNode(ports, offset);
        this._initPolyline(ports, offset, pageOffset);
        this._afterAdd();
    }
    /**
     * 擴充remove
     *
     * @memberof LifeSphere
     */
    remove() {
        super.remove();
        this._circles.forEach(function (circle) {
            circle.remove();
        });
    }
    /**
     * 取得polygon js 物件
     *
     * @private
     * @returns
     * @memberof LifeSphere
     */
    _getPolygonNode() {
        return document
            .querySelector(`#${this._paper.getOriginalPaper().svg.id} [model-id="${this._element.id}"] polygon`);
    }
    /**
     * 取得polyline js 物件
     *
     * @private
     * @returns
     * @memberof LifeSphere
     */
    _getPolylineNode() {
        return document
            .querySelector(`#${this._paper.getOriginalPaper().svg.id} [model-id="${this._element.id}"] polyline`);
    }
    /**
     * 初始化polyline
     *
     * @private
     * @param {Array<PositionInterface>} ports
     * @param {PositionInterface} offset
     * @param {PositionInterface} pageOffset
     * @memberof LifeSphere
     */
    _initPolyline(ports, offset, pageOffset) {
        const self = this;
        const node = this._getPolygonNode();
        const polylinePath = utils_1.DiagramUtils.toPositionArray(ports);
        polylinePath.push(polylinePath[0]);
        const polyline = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
        polyline.setAttribute('points', polylinePath.join(' '));
        polyline.setAttribute('cursor', 'pointer');
        polyline.setAttribute('fill', 'none');
        polyline.setAttribute('stroke', 'black');
        polyline.setAttribute('stroke-width', 4);
        node.parentNode.insertBefore(polyline, node.parentNode.childNodes[1]);
        const svgNode = document.getElementById(`${this._paper.getOriginalPaper().svg.id}`);
        const paperNode = svgNode ? svgNode.parentNode : undefined;
        polyline.addEventListener('click', function (data) {
            const clickPosition = {
                x: data.clientX - paperNode.getBoundingClientRect().left,
                y: data.clientY - paperNode.getBoundingClientRect().top
            };
            const currentPolygon = self._getPolygonNode();
            const currentPort = currentPolygon.getAttribute('points').split(' ');
            self._circles.push(self._circles[0]);
            let assignIndex = 0;
            const isBetween = function (left, right, target) {
                return left <= target && target <= right;
            };
            const polygonOffset = {
                x: constants_1.DiagramConstant.LIFE_SPHERE_PARAM.size.width / 2,
                y: constants_1.DiagramConstant.LIFE_SPHERE_PARAM.size.height / 2
            };
            for (let i = 0; i < self._circles.length - 1; i++) {
                const minX = Math.min(self._circles[i].position().x, self._circles[i + 1].position().x) - 2;
                const minY = Math.min(self._circles[i].position().y, self._circles[i + 1].position().y) - 2;
                const maxX = Math.max(self._circles[i].position().x, self._circles[i + 1].position().x) + 2;
                const maxY = Math.max(self._circles[i].position().y, self._circles[i + 1].position().y) + 2;
                if (isBetween(minX, maxX, clickPosition.x - polygonOffset.x) &&
                    isBetween(minY, maxY, clickPosition.y - polygonOffset.y)) {
                    assignIndex = i;
                }
            }
            currentPort.splice(assignIndex + 1, 0, `${data.offsetX - self._element.position().x}` +
                `,${data.offsetY - self._element.position().y}`);
            node.setAttribute('points', currentPort.join(' '));
            self._circles.forEach(function (circle) {
                circle.remove();
            });
            self._circles = [];
            self._initNode(utils_1.DiagramUtils.toXYArray(currentPort), offset);
            currentPort.push(currentPort[0]);
            polyline.setAttribute('points', currentPort.join(' '));
        });
    }
    /**
     * 顯示刪除按鈕
     *
     * @private
     * @param {*} circle
     * @param {PositionInterface} offset
     * @param {number} index
     * @memberof LifeSphere
     */
    _appendRemoveNode(circle, offset, index) {
        const self = this;
        const removeEvent = function () {
            const node = self._getPolygonNode();
            const currentPorts = node.getAttribute('points').split(' ');
            currentPorts.splice(index, 1);
            self.prop('newRefPoints', currentPorts.join(' '));
            self._circles.forEach(function (circle) {
                circle.remove();
            });
            self._circles = [];
            node.setAttribute('points', currentPorts.join(' '));
            self._initNode(utils_1.DiagramUtils.toXYArray(currentPorts), offset);
            const polyline = self._getPolylineNode();
            currentPorts.push(currentPorts[0]);
            polyline.setAttribute('points', currentPorts.join(' '));
        };
        const removeNode = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        removeNode.setAttribute('r', 7);
        removeNode.setAttribute('cx', offset.x + 10);
        removeNode.setAttribute('cy', offset.y - 10);
        removeNode.setAttribute('fill', 'red');
        removeNode.setAttribute('cursor', 'pointer');
        removeNode.setAttribute('class', 'remove-icon');
        removeNode.addEventListener('click', removeEvent);
        const removeCross = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        removeCross.setAttribute('stroke', 'white');
        removeCross.setAttribute('stroke-width', 2);
        removeCross.setAttribute('d', `M ${offset.x + 10 - 3}` +
            `,${offset.y - 10 - 3} ${offset.x + 10 + 3}` +
            `,${offset.y - 10 + 3} M ${offset.x + 10 - 3}` +
            `,${offset.y - 10 + 3} ${offset.x + 10 + 3},${offset.y - 10 - 3}`);
        removeCross.setAttribute('cursor', 'pointer');
        removeCross.setAttribute('class', 'remove-icon');
        removeCross.addEventListener('click', removeEvent);
        const circleNode = document.querySelector(`[model-id="${circle.id}"]`);
        circleNode.appendChild(removeNode);
        circleNode.appendChild(removeCross);
    }
    /**
     * 移除刪除按鈕
     *
     * @private
     * @param {*} circle
     * @memberof LifeSphere
     */
    _removeRemoveNode(circle) {
        const removeIcon = document.querySelectorAll(`[model-id="${circle.id}"] .remove-icon`);
        [].forEach.call(removeIcon, function (icon) {
            icon.remove();
        });
    }
    /**
     * 初始化變形節點
     *
     * @private
     * @param {Array<any>} ports
     * @param {*} offset
     * @memberof LifeSphere
     */
    _initNode(ports, offset) {
        const self = this;
        ports.forEach(function (port, index) {
            const circle = new joint.shapes.standard.Circle();
            circle.resize(offset.x * 2, offset.y * 2);
            circle.attr('root/portId', index);
            circle.attr('body/fill', 'lightblue');
            circle.attr('body/refR', '2.5%');
            circle.position(self._element.position().x + port.x - offset.x, self._element.position().y + port.y - offset.y);
            circle.addTo(self._paper.getGraph());
            let movePorts;
            // 變形事件
            const circleEvent = function (data) {
                const node = self._getPolygonNode();
                movePorts = node.getAttribute('points').split(' ');
                movePorts[index] = `${data.position().x - self._element.position().x + offset.x}` +
                    `,${data.position().y - self._element.position().y + offset.y}`;
                node.setAttribute('points', movePorts.join(' '));
                self.prop('newRefPoints', movePorts.join(' '));
                const polyline = self._getPolylineNode();
                movePorts.push(movePorts[0]);
                polyline.setAttribute('points', movePorts.join(' '));
            };
            self._paper.getOriginalPaper().on('element:mouseenter', function (view) {
                if (view.model.id === circle.id) {
                    self._appendRemoveNode(circle, offset, index);
                }
            });
            self._paper.getOriginalPaper().on('element:mouseleave', function (view) {
                if (view.model.id === circle.id) {
                    self._removeRemoveNode(circle);
                }
            });
            self._paper.getOriginalPaper().on('element:pointerdown', function () {
                circle.on('change:position', circleEvent);
            });
            self._paper.getOriginalPaper().on('element:pointerup', function () {
                circle.off('change:position', circleEvent);
            });
            // 位移事件
            self._element.on('change:position', function (elementView) {
                const node = self._getPolygonNode();
                movePorts = node.getAttribute('points').split(' ');
                const pos = self._paper.findByModelId(elementView.id).getElement().position();
                if (movePorts[index]) {
                    circle.position(pos.x + (+movePorts[index].split(',')[0]) - offset.x, pos.y + (+movePorts[index].split(',')[1]) - offset.y);
                }
            });
            self._circles.push(circle);
        });
    }
    /**
     * 右鍵事件
     *
     * @private
     * @memberof LifeSphere
     */
    _rightClick() {
        const self = this;
        const node = document.querySelector(`[model-id="${this._element.id}"]`);
        let menu;
        const lastContextMenu = {};
        node.addEventListener('contextmenu', function (mouse) {
            if (menu) {
                menu.remove();
            }
            menu = document.createElement('table');
            menu.style.position = 'absolute';
            menu.style.background = 'white';
            menu.border = '1px';
            menu.setAttribute('frame', 'box');
            menu.setAttribute('rules', 'none');
            menu.style.position = 'absolute';
            menu.style.boxShadow = '2px 2px 2px lightgrey';
            const menulist = [
                {
                    title: function () {
                        return '修改內文';
                    },
                    event: function () {
                        const textDiv = document.createElement('div');
                        textDiv.style.position = 'absolute';
                        textDiv.border = '1px';
                        textDiv.style.left = menu.style.left;
                        textDiv.style.top = menu.style.top;
                        const text = document.createElement('textarea');
                        text.rows = 4;
                        text.cols = 30;
                        text.value = self.prop('iconContent') === undefined ? '' : self.prop('iconContent');
                        const buttonDiv = document.createElement('div');
                        const button = document.createElement('button');
                        button.innerHTML = '確認';
                        const cancle = document.createElement('button');
                        cancle.innerHTML = '取消';
                        textDiv.appendChild(text);
                        buttonDiv.appendChild(button);
                        buttonDiv.appendChild(cancle);
                        textDiv.appendChild(buttonDiv);
                        document.body.appendChild(textDiv);
                        button.onclick = function () {
                            if (text.value.length > 0) {
                                self.setContent(text.value);
                                textDiv.remove();
                            }
                        };
                        cancle.onclick = function () {
                            textDiv.remove();
                        };
                    }
                },
                {
                    title: function () {
                        return '刪除';
                    },
                    event: function () {
                        self.remove();
                    }
                }
            ];
            menulist.forEach(function (content) {
                const tr = document.createElement('tr');
                const td = document.createElement('td');
                td.innerHTML = content.title();
                td.style.borderRadius = '2px';
                td.addEventListener('mouseover', function () {
                    td.style.background = 'cornflowerblue';
                });
                td.addEventListener('mouseout', function () {
                    td.style.background = 'white';
                });
                td.addEventListener('mouseup', content.event);
                tr.appendChild(td);
                menu.appendChild(tr);
            });
            document.body.appendChild(menu);
            const menuOffset = function (ev) {
                const x = document.documentElement.scrollLeft + ev.clientX;
                //const y = document.documentElement.scrollTop + ev.clientY;
                const y = mouse.pageY;
                const html = document.documentElement;
                const browserWidth = html.clientWidth;
                // const browserHeight = html.clientHeight;
                const menuWidth = menu.offsetWidth;
                // const menuHeight = menu.offsetHeight;
                return {
                    left: (x + menuWidth) > browserWidth ? (browserWidth - menuWidth) : x,
                    top: y
                };
            };
            menu.style.left = `${menuOffset(mouse).left}px`;
            menu.style.top = `${menuOffset(mouse).top}px`;
            lastContextMenu.x = mouse.pageX;
            lastContextMenu.y = mouse.pageY;
        });
        document.addEventListener('contextmenu', function (mouse) {
            if (mouse.pageX !== lastContextMenu.x && mouse.pageY !== lastContextMenu.y) {
                if (menu) {
                    menu.remove();
                }
            }
        });
        document.addEventListener('click', function (mouse) {
            if (mouse.pageX !== lastContextMenu.x && mouse.pageY !== lastContextMenu.y) {
                if (menu) {
                    menu.remove();
                }
            }
        });
    }
    /**
     * click事件
     *
     * @param {*} event
     * @memberof LifeSphere
     */
    onClick(event) {
        const self = this;
        const node = document.querySelector(`svg [model-id="${this._element.id}"] [joint-selector="body"]`);
        node.addEventListener('click', function () {
            event(self);
        });
    }
    /**
     * 實作新增前hook
     *
     * @protected
     * @memberof LifeSphere
     */
    _beforeAdd() {
        throw new Error('Method not implemented.');
    }
    /**
     * 實作新增後hook
     *
     * @protected
     * @memberof LifeSphere
     */
    _afterAdd() {
        if (this.prop('iconContent')) {
            this.setContent(this.prop('iconContent'));
        }
        this._paper.addElement(this);
        this._rightClick();
        const self = this;
        this._circles.forEach(function (circle) {
            const node = document.querySelector(`svg [model-id="${circle.id}"]`);
            node.style.display = 'none';
        });
        const polyline = self._getPolylineNode();
        polyline.style.display = 'none';
        this.onClick(function () {
            self._circles.forEach(function (circle) {
                const node = document.querySelector(`svg [model-id="${circle.id}"]`);
                node.style.display = '';
            });
            const polyline = self._getPolylineNode();
            polyline.style.display = '';
        });
        this._paper.getOriginalPaper().on('blank:pointerclick', function () {
            self._circles.forEach(function (circle) {
                const node = document.querySelector(`svg [model-id="${circle.id}"]`);
                if (node) {
                    node.style.display = 'none';
                }
            });
            const polyline = self._getPolylineNode();
            if (polyline) {
                polyline.style.display = 'none';
            }
        });
    }
}
exports.LifeSphere = LifeSphere;
/**
 * 生態圈物件
 *
 * @export
 * @class EcologySphere
 * @extends {AbsctractElement}
 * @author sungyeh
 */
class EcologySphere extends AbsctractElement {
    /**
       * 實作新增前hook
       *
       * @protected
       * @memberof EcologySphere
       */
    _beforeAdd() {
        throw new Error('Method not implemented.');
    }
    /**
       * 實作新增後hook
       *
       * @protected
       * @memberof EcologySphere
       */
    _afterAdd() {
        if (this.prop('iconContent')) {
            this.setContent(this.prop('iconContent'));
        }
        this._paper.addElement(this);
        this._rightClick();
    }
    /**
       * 右鍵事件
       *
       * @private
       * @memberof EcologySphere
       */
    _rightClick() {
        const self = this;
        const node = document.querySelector(`[model-id="${this._element.id}"]`);
        let menu;
        const lastContextMenu = {};
        node.addEventListener('contextmenu', function (mouse) {
            if (menu) {
                menu.remove();
            }
            menu = document.createElement('table');
            menu.style.position = 'absolute';
            menu.style.background = 'white';
            menu.border = '1px';
            menu.setAttribute('frame', 'box');
            menu.setAttribute('rules', 'none');
            menu.style.position = 'absolute';
            menu.style.boxShadow = '2px 2px 2px lightgrey';
            const menulist = [
                {
                    title: function () {
                        return '修改內文';
                    },
                    event: function () {
                        const textDiv = document.createElement('div');
                        textDiv.style.position = 'absolute';
                        textDiv.border = '1px';
                        textDiv.style.left = menu.style.left;
                        textDiv.style.top = menu.style.top;
                        const text = document.createElement('textarea');
                        text.rows = 4;
                        text.cols = 30;
                        text.value = self.prop('iconContent') === undefined ? '' : self.prop('iconContent');
                        const buttonDiv = document.createElement('div');
                        const button = document.createElement('button');
                        button.innerHTML = '確認';
                        const cancle = document.createElement('button');
                        cancle.innerHTML = '取消';
                        textDiv.appendChild(text);
                        buttonDiv.appendChild(button);
                        buttonDiv.appendChild(cancle);
                        textDiv.appendChild(buttonDiv);
                        document.body.appendChild(textDiv);
                        button.onclick = function () {
                            if (text.value.length > 0) {
                                self.setContent(text.value);
                                textDiv.remove();
                            }
                        };
                        cancle.onclick = function () {
                            textDiv.remove();
                        };
                    }
                },
                {
                    title: function () {
                        return '刪除';
                    },
                    event: function () {
                        self.remove();
                    }
                }
            ];
            menulist.forEach(function (content) {
                const tr = document.createElement('tr');
                const td = document.createElement('td');
                td.innerHTML = content.title();
                td.style.borderRadius = '2px';
                td.addEventListener('mouseover', function () {
                    td.style.background = 'cornflowerblue';
                });
                td.addEventListener('mouseout', function () {
                    td.style.background = 'white';
                });
                td.addEventListener('mouseup', content.event);
                tr.appendChild(td);
                menu.appendChild(tr);
            });
            document.body.appendChild(menu);
            const menuOffset = function (ev) {
                const x = document.documentElement.scrollLeft + ev.clientX;
                //const y = document.documentElement.scrollTop + ev.clientY;
                const y = mouse.pageY;
                const html = document.documentElement;
                const browserWidth = html.clientWidth;
                // const browserHeight = html.clientHeight;
                const menuWidth = menu.offsetWidth;
                // const menuHeight = menu.offsetHeight;
                return {
                    left: (x + menuWidth) > browserWidth ? (browserWidth - menuWidth) : x,
                    top: y
                };
            };
            menu.style.left = `${menuOffset(mouse).left}px`;
            menu.style.top = `${menuOffset(mouse).top}px`;
            lastContextMenu.x = mouse.pageX;
            lastContextMenu.y = mouse.pageY;
        });
        document.addEventListener('contextmenu', function (mouse) {
            if (mouse.pageX !== lastContextMenu.x && mouse.pageY !== lastContextMenu.y) {
                if (menu) {
                    menu.remove();
                }
            }
        });
        document.addEventListener('click', function (mouse) {
            if (mouse.pageX !== lastContextMenu.x && mouse.pageY !== lastContextMenu.y) {
                if (menu) {
                    menu.remove();
                }
            }
        });
    }
    /**
       *Creates an instance of EcologySphere.
       * @param {Paper} paper
       * @param {*} position
       * @param {PolygonInterface} [options]
       * @memberof EcologySphere
       */
    constructor(paper, position, options) {
        if (options === undefined) {
            options = constants_1.DiagramConstant.ECOLOGY_SPHERE_PARAM;
        }
        super(paper, options);
        const circle = new joint.shapes.standard.Circle(this._attr);
        circle.position(position.x, position.y);
        circle.addTo(paper.getGraph());
        circle.toBack();
        this._element = circle;
        this._afterAdd();
    }
}
exports.EcologySphere = EcologySphere;
/**
 * 文字註解區
 *
 * @export
 * @class TextArea
 * @extends {AbsctractElement}
 * @author sungyeh
 */
class TextArea extends AbsctractElement {
    /**
       * 實作新增前hook
       *
       * @protected
       * @memberof TextArea
       */
    _beforeAdd() {
        throw new Error('Method not implemented.');
    }
    /**
       * 實作新增後hook
       *
       * @protected
       * @memberof TextArea
       */
    _afterAdd() {
        if (this.prop('iconContent')) {
            this.setContent(this.prop('iconContent'));
        }
        this._paper.addElement(this);
        this._rightClick();
    }
    /**
       * 設定內文
       *
       * @param {string} content
       * @memberof TextArea
       */
    setContent(content) {
        super.setContent(content);
        const height = content.split('\n').length;
        const width = content.split('').length;
        this._element.resize(15 * width, 15 * height);
    }
    /**
       * 右鍵事件
       *
       * @private
       * @memberof TextArea
       */
    _rightClick() {
        const self = this;
        const node = document.querySelector(`[model-id="${this._element.id}"]`);
        let menu;
        const lastContextMenu = {};
        node.addEventListener('contextmenu', function (mouse) {
            if (menu) {
                menu.remove();
            }
            menu = document.createElement('table');
            menu.style.position = 'absolute';
            menu.style.background = 'white';
            menu.border = '1px';
            menu.setAttribute('frame', 'box');
            menu.setAttribute('rules', 'none');
            menu.style.position = 'absolute';
            menu.style.boxShadow = '2px 2px 2px lightgrey';
            const menulist = [
                {
                    title: function () {
                        return '修改內文';
                    },
                    event: function () {
                        const textDiv = document.createElement('div');
                        textDiv.style.position = 'absolute';
                        textDiv.border = '1px';
                        textDiv.style.left = menu.style.left;
                        textDiv.style.top = menu.style.top;
                        const text = document.createElement('textarea');
                        text.rows = 4;
                        text.cols = 30;
                        text.value = self.prop('iconContent') === undefined ? '' : self.prop('iconContent');
                        const buttonDiv = document.createElement('div');
                        const button = document.createElement('button');
                        button.innerHTML = '確認';
                        const cancle = document.createElement('button');
                        cancle.innerHTML = '取消';
                        textDiv.appendChild(text);
                        buttonDiv.appendChild(button);
                        buttonDiv.appendChild(cancle);
                        textDiv.appendChild(buttonDiv);
                        document.body.appendChild(textDiv);
                        button.onclick = function () {
                            if (text.value.length > 0) {
                                self.setContent(text.value);
                                textDiv.remove();
                            }
                        };
                        cancle.onclick = function () {
                            textDiv.remove();
                        };
                    }
                },
                {
                    title: function () {
                        return '刪除';
                    },
                    event: function () {
                        self.remove();
                    }
                }
            ];
            menulist.forEach(function (content) {
                const tr = document.createElement('tr');
                const td = document.createElement('td');
                td.innerHTML = content.title();
                td.style.borderRadius = '2px';
                td.addEventListener('mouseover', function () {
                    td.style.background = 'cornflowerblue';
                });
                td.addEventListener('mouseout', function () {
                    td.style.background = 'white';
                });
                td.addEventListener('mouseup', content.event);
                tr.appendChild(td);
                menu.appendChild(tr);
            });
            document.body.appendChild(menu);
            const menuOffset = function (ev) {
                const x = document.documentElement.scrollLeft + ev.clientX;
                //const y = document.documentElement.scrollTop + ev.clientY;
                const y = mouse.pageY;
                const html = document.documentElement;
                const browserWidth = html.clientWidth;
                // const browserHeight = html.clientHeight;
                const menuWidth = menu.offsetWidth;
                // const menuHeight = menu.offsetHeight;
                return {
                    left: (x + menuWidth) > browserWidth ? (browserWidth - menuWidth) : x,
                    top: y
                };
            };
            menu.style.left = `${menuOffset(mouse).left}px`;
            menu.style.top = `${menuOffset(mouse).top}px`;
            lastContextMenu.x = mouse.pageX;
            lastContextMenu.y = mouse.pageY;
        });
        document.addEventListener('contextmenu', function (mouse) {
            if (mouse.pageX !== lastContextMenu.x && mouse.pageY !== lastContextMenu.y) {
                if (menu) {
                    menu.remove();
                }
            }
        });
        document.addEventListener('click', function (mouse) {
            if (mouse.pageX !== lastContextMenu.x && mouse.pageY !== lastContextMenu.y) {
                if (menu) {
                    menu.remove();
                }
            }
        });
    }
    /**
       *Creates an instance of TextArea.
       * @param {Paper} paper
       * @param {*} position
       * @param {PolygonInterface} [options]
       * @memberof TextArea
       */
    constructor(paper, position, options) {
        if (options === undefined) {
            options = constants_1.DiagramConstant.TEXT_AREA_PARAM;
        }
        super(paper, options);
        const rectangle = new joint.shapes.standard.Rectangle(this._attr);
        rectangle.position(position.x, position.y);
        rectangle.addTo(paper.getGraph());
        rectangle.toBack();
        this._element = rectangle;
        this._afterAdd();
    }
}
exports.TextArea = TextArea;
/**
 * paper物件
 *
 * @export
 * @class Paper
 * @author sungyeh
 */
class Paper {
    /**
     *Creates an instance of Paper.
     * @param {PapaerInterface} attr
     * @memberof Paper
     */
    constructor(attr) {
        this._graph = new joint.dia.Graph;
        attr.model = this._graph;
        attr.interactive = function (cellView) {
            let isInteractive = true;
            if (cellView.model.attributes.disabledInteractive &&
                cellView.model.attributes.disabledInteractive === true) {
                isInteractive = false;
            }
            return isInteractive;
        };
        this._paper = new joint.dia.Paper(attr);
        this._elements = [];
        this._links = [];
        this._rightClick();
    }
    /**
     * 右鍵事件
     *
     * @private
     * @memberof Paper
     */
    _rightClick() {
        const self = this;
        let menu;
        const lastContextMenu = {};
        this.getOriginalPaper().on('blank:contextmenu', function (mouse) {
        	if (menu) {
                menu.remove();
            }
            menu = document.createElement('table');
            menu.style.position = 'absolute';
            menu.style.background = 'white';
            menu.border = '1px';
            menu.setAttribute('frame', 'box');
            menu.setAttribute('rules', 'none');
            menu.style.position = 'absolute';
            menu.style.boxShadow = '2px 2px 2px lightgrey';
            const svgNode = document.getElementById(`${self.getOriginalPaper().svg.id}`);
            const paperNode = svgNode ? svgNode.parentNode : undefined;
            const menulist = [
                {
                    title: function () {
                        return '新增互動關係';
                    },
                    event: function () {
                        const link = utils_1.DiagramUtils.generators['harmonious-link'](self, {
                            x: mouse.clientX - paperNode.getBoundingClientRect().left,
                            y: mouse.clientY - paperNode.getBoundingClientRect().top
                        }, {
                            x: mouse.clientX - paperNode.getBoundingClientRect().left +
                                constants_1.DiagramConstant.OFFSET_PARAM.icon * 4,
                            y: mouse.clientY - paperNode.getBoundingClientRect().top
                        });
                        link.setLinkTools(['targetHead', 'sourceHead']);
                    }
                },
                {
                    title: function () {
                        return '新增角色';
                    },
                    event: function () {
                        new Male(self, {
                            x: mouse.clientX - paperNode.getBoundingClientRect().left,
                            y: mouse.clientY - paperNode.getBoundingClientRect().top
                        });
                    }
                },
                {
                    title: function () {
                        return '新增生態圈';
                    },
                    event: function () {
                        new EcologySphere(self, {
                            x: mouse.clientX - paperNode.getBoundingClientRect().left,
                            y: mouse.clientY - paperNode.getBoundingClientRect().top
                        });
                    }
                },
                {
                    title: function () {
                        return '新增生活圈';
                    },
                    event: function () {
                        new LifeSphere(self, {
                            x: mouse.clientX - paperNode.getBoundingClientRect().left,
                            y: mouse.clientY - paperNode.getBoundingClientRect().top
                        });
                    }
                },
                {
                    title: function () {
                        return '新增文字註解';
                    },
                    event: function () {
                        new TextArea(self, {
                            x: mouse.clientX - paperNode.getBoundingClientRect().left,
                            y: mouse.clientY - paperNode.getBoundingClientRect().top
                        });
                    }
                },
                {
                    title: function () {
                        return '匯出PNG';
                    },
                    event: function () {
                        self.toImage('png', true);
                    }
                }

                ,
                {
                    title: function () {
                        return '匯出Json';
                    },
                    event: function () {
                        self.exportJson();
                    }
                }
                ,
                {
                    title: function () {
                        return '匯入Json';
                    },
                    event: function () {
                        self.fromJsonFile();
                    }
                }

            ];
            menulist.forEach(function (content) {
                const tr = document.createElement('tr');
                const td = document.createElement('td');
                td.innerHTML = content.title();
                td.style.borderRadius = '2px';
                td.addEventListener('mouseover', function () {
                    td.style.background = 'cornflowerblue';
                });
                td.addEventListener('mouseout', function () {
                    td.style.background = 'white';
                });
                td.addEventListener('mouseup', content.event);
                tr.appendChild(td);
                menu.appendChild(tr);
            });
            document.body.appendChild(menu);
            const menuOffset = function (ev) {
                const x = document.documentElement.scrollLeft + ev.clientX;
                //const y = document.documentElement.scrollTop + ev.clientY;
                const y = mouse.pageY;
                const html = document.documentElement;
                const browserWidth = html.clientWidth;
                // const browserHeight = html.clientHeight;
                const menuWidth = menu.offsetWidth;
                // const menuHeight = menu.offsetHeight;
                return {
                    left: (x + menuWidth) > browserWidth ? (browserWidth - menuWidth) : x,
                    top: y
                };
            };
            menu.style.left = `${menuOffset(mouse).left}px`;
            menu.style.top = `${menuOffset(mouse).top}px`;
            lastContextMenu.x = mouse.pageX;
            lastContextMenu.y = mouse.pageY;
        });
        document.addEventListener('contextmenu', function (mouse) {
            if (mouse.pageX !== lastContextMenu.x && mouse.pageY !== lastContextMenu.y) {
                if (menu) {
                    menu.remove();
                }
            }
        });
        document.addEventListener('click', function (mouse) {
            if (mouse.pageX !== lastContextMenu.x && mouse.pageY !== lastContextMenu.y) {
                if (menu) {
                    menu.remove();
                }
            }
        });
    }
    /**
     * json匯入
     *
     * @param {*} json
     * @memberof Paper
     */
    fromJson(json) {
        const self = this;
        const element = json.cells.filter(function (cell) {
            return cell.tistOrder === 0;
        });
        element.forEach(function (cell) {
            if (cell.attrs2) {
                cell.attrs = cell.attrs2;
            }
            utils_1.DiagramUtils.generators[cell.tistType](self, cell.position, cell);
            const maxWidth = paper.getOriginalPaper().options.width;
            const maxHeight = paper.getOriginalPaper().options.height;
            var maxposiX = Number(cell.position.x);
            var maxposiY = Number(cell.position.y);
            if(cell.tistType=="ecology-sphere"){
            	maxposiX = maxposiX+constants_1.DiagramConstant.ECOLOGY_SPHERE_PARAM.size.width;
            	maxposiY = maxposiY+constants_1.DiagramConstant.ECOLOGY_SPHERE_PARAM.size.height;
            }else if(cell.tistType=="life-sphere"){
               	var tmpPoint = cell.attrs.body.refPoints.split(' ');
            	var maxPointX = 0;
            	var maxPointY = 0;
            	for(var tmpIdx=0;tmpIdx<tmpPoint.length;tmpIdx++){
            		var tmpPosi = tmpPoint[tmpIdx].split(',');
            		if(maxPointX<Number(tmpPosi[0])){
            			maxPointX = Number(tmpPosi[0]);
            		}
            		if(maxPointY<Number(tmpPosi[1])){
            			maxPointY = Number(tmpPosi[1]);
            		}
            	}
            	if(cell.newRefPoints){
            		tmpPoint = cell.newRefPoints.split(' ');
            		for(var tmpIdx=0;tmpIdx<tmpPoint.length;tmpIdx++){
                		var tmpPosi = tmpPoint[tmpIdx].split(',');
                		if(maxPointX<Number(tmpPosi[0])){
                			maxPointX = Number(tmpPosi[0]);
                		}
                		if(maxPointY<Number(tmpPosi[1])){
                			maxPointY = Number(tmpPosi[1]);
                		}
                	}
            	}
            	maxposiX = maxposiX+maxPointX;
            	maxposiY = maxposiY+maxPointY;
            }else{
            	maxposiX = maxposiX+constants_1.DiagramConstant.OFFSET_PARAM.icon * 2;
            	maxposiY = maxposiY+constants_1.DiagramConstant.OFFSET_PARAM.icon * 2;
            }
            if (maxposiX  > maxWidth) {
            	var newWidth = maxposiX+ constants_1.DiagramConstant.OFFSET_PARAM.icon;
            	paper.getOriginalPaper().options.width = newWidth;
            	var temppaper = document.getElementById('paper');
                temppaper.style.width = newWidth;
            }
            if (maxposiY > maxHeight) {
            	var newHeight = maxposiY + constants_1.DiagramConstant.OFFSET_PARAM.icon;
                paper.getOriginalPaper().options.height = newHeight;
                var temppaper = document.getElementById('paper');
                temppaper.style.height = newHeight;
            }
        });
        const links = json.cells.filter(function (cell) {
            return cell.tistOrder === 1;
        });
        const notNormalLinks = json.cells.filter(function (cell) {
            return cell.tistOrder === 2;
        });
        notNormalLinks.forEach(function (cell) {
            if (cell.attrs2) {
                cell.attrs = cell.attrs2;
            }
            utils_1.DiagramUtils.generators[cell.tistType](self, cell.source, cell.target, cell);
        });
        links.forEach(function (cell) {
            if (cell.attrs2) {
                cell.attrs = cell.attrs2;
            }
            utils_1.DiagramUtils.generators[cell.tistType](self, cell.source, cell.target, cell);
        });
    }
    /**
     * 匯出json檔案
     *
     * @returns
     * @memberof Paper
     */
    exportJson() {
    	var json = JSON.stringify(this.getGraph().toJSON()).trim();
    	//alert(json);
    	let fileName = "tist-diagram.json";
    	const data = json;
    	let blob = new Blob([data], {
    	    type: "application/octet-stream",
    	});
    	var href = URL.createObjectURL(blob);
    	var link = document.createElement("a");
    	document.body.appendChild(link);
    	link.href = href;
    	link.download = fileName;
    	link.click();
    }
    /**
     * 匯入json
     *
     * @returns
     * @memberof Paper
     */
    fromJsonFile(){
    	var tempbutton = document.getElementById('importJson');
    	tempbutton.click();
    }
    /**
     * 匯出json
     *
     * @returns
     * @memberof Paper
     */
    toJson() {
        return this.getGraph().toJSON();
    }
    /**
     * 取得jointjs paper
     *
     * @returns
     * @memberof Paper
     */
    getOriginalPaper() {
        return this._paper;
    }
    /**
     * 取得graph
     *
     * @returns
     * @memberof Paper
     */
    getGraph() {
        return this._graph;
    }
    /**
     * 取得畫布上links
     *
     * @returns
     * @memberof Paper
     */
    getLinks() {
        return this._links;
    }
    /**
     * 取得畫布上elements
     *
     * @returns
     * @memberof Paper
     */
    getElements() {
        return this._elements;
    }
    /**
     * 紀錄新增link
     *
     * @param {*} link
     * @memberof Paper
     */
    addLink(link) {
        this._links.push(link);
    }
    /**
     * 記錄新增element
     *
     * @param {*} element
     * @memberof Paper
     */
    addElement(element) {
        this._elements.push(element);
    }
    /**
     * 移除link紀錄
     *
     * @param {string} id
     * @memberof Paper
     */
    removeLink(id) {
        const self = this;
        this._links.forEach(function (link, index) {
            if (link.getMajorLink().id === id) {
                self._links.splice(index, 1);
            }
        });
    }
    /**
     * 移除element 紀錄
     *
     * @param {string} id
     * @memberof Paper
     */
    removeElment(id) {
        const self = this;
        this._elements.forEach(function (element, index) {
            if (element.getElement().id === id) {
                self._elements.splice(index, 1);
            }
        });
    }
    /**
     * 清除畫布
     *
     * @memberof Paper
     */
    clear() {
        this.getGraph().clear();
        this._elements = [];
        this._links = [];
    }
    /**
     * 取base64
     *
     * @memberof Paper
     */
    base64Png() {
         const svg = this.getOriginalPaper().svg;
         const xml = new XMLSerializer().serializeToString(svg);
         const data = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(xml)));
         const width = this._paper.options.width;
         const height = this._paper.options.height;
         const canvas = document.createElement('canvas');
         const context = canvas.getContext('2d');
         canvas.width = width;
         canvas.height = height;
         const image = new Image();
         const self = this;
         return new Promise((resolve, reject) => {
             image.onload = () => {
                 context.fillStyle = self._paper.options.background.color;
                 context.fillRect(0, 0, canvas.width, canvas.height);
                 context.drawImage(image, 0, 0);
                 const pngData = canvas.toDataURL('image/png');
                 const obj = {
                     base64: pngData,
                     //blob: self._b64toBlob(pngData, type === undefined ? 'png' : type)
                 };
                 resolve(obj);
             };
             image.onerror = reject;
             image.src = data;
         });
    }
    /**
     * 匯出圖片
     *
     * @param {string} [type]
     * @memberof Paper
     */
    toImage(type, download) {
        if (type === undefined) {
            type = 'png';
        }
        const svg = this.getOriginalPaper().svg;
        const xml = new XMLSerializer().serializeToString(svg);
        const data = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(xml)));
        const width = this._paper.options.width;
        const height = this._paper.options.height;
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.width = width;
        canvas.height = height;
        const image = new Image();
        const self = this;
        return new Promise((resolve, reject) => {
            image.onload = () => {
                context.fillStyle = self._paper.options.background.color;
                context.fillRect(0, 0, canvas.width, canvas.height);
                context.drawImage(image, 0, 0);
                const pngData = canvas.toDataURL(`image/${type}`);
                const link = document.createElement('a');
                link.href = pngData;
                link.download = 'tist-diagram.png';
                if (download) {
                    link.click();
                }
                const obj = {
                    base64: pngData,
                    blob: self._b64toBlob(pngData, type === undefined ? 'png' : type)
                };
                resolve(obj);
            };
            image.onerror = reject;
            image.src = data;
        });
    }
    /**
     * 將base64 data uri轉為blob
     * @param dataURI data uri
     */
    _b64toBlob(dataURI, type) {
        const byteString = atob(dataURI.split(',')[1]);
        const buffer = new ArrayBuffer(byteString.length);
        const unit = new Uint8Array(buffer);
        for (let i = 0; i < byteString.length; i++) {
            unit[i] = byteString.charCodeAt(i);
        }
        return new Blob([buffer], { type: `image/${type}` });
    }
    /**
     * xml匯入
     *
     * @param {*} xml
     * @memberof Paper
     */
    fromXml(xml) {
        this._personGenerator(xml.getElementsByTagName('PERSONOBJECTNODE'));
        this._ecoGenerator(xml.getElementsByTagName('ECOOBJECT'));
        this._textAreaGenerator(xml.getElementsByTagName('FLOATTEXT'));
        this._lifeGenerator(xml.getElementsByTagName('ECOOBJECT'));
        this._relationGenerator(xml.getElementsByTagName('RELATIONSHIPLINEOBJECT'));
        this._spouseGenerator(xml);
        this._illegitimateChildGenerator(xml);
        this._siblingGenerator(xml);
    }
    /**
     * xml角色產生器
     *
     * @private
     * @param {*} personNodes
     * @memberof Paper
     */
    _personGenerator(personNodes) {
        const self = this;
        const genderMap = {
            '0': function (param) {
                return +param.getElementsByTagName('PREGNANCY')[0].textContent === 0 ?
                    'unknown' : 'fetus';
            },
            '1': function (param) {
                return +param.getElementsByTagName('PREGNANCY')[0].textContent > 0 ?
                    'fetus' : 'male';
            },
            '2': function (param) {
                return +param.getElementsByTagName('PREGNANCY')[0].textContent > 0 ?
                    'fetus' : 'female';
            }
        };
        [].forEach.call(personNodes, function (data) {
            const position = {
                x: constants_1.DiagramConstant.OFFSET_PARAM.positionScale * (+data.getElementsByTagName('XPOS')[0].textContent),
                y: constants_1.DiagramConstant.OFFSET_PARAM.positionScale * (+data.getElementsByTagName('YPOS')[0].textContent)
            };
            const person = utils_1.DiagramUtils
                .generators[genderMap[data.getElementsByTagName('SEX')[0].textContent](data)](self, position);
            person.setContent(data.getElementsByTagName('AGE')[0].textContent);
            person.setNote(data.getElementsByTagName('MEMO')[0].textContent);
            if (data.getElementsByTagName('MASTER')[0].textContent === '1') {
                person.isClient(true);
            }
            if (data.getElementsByTagName('ALIVE')[0].textContent === '0') {
                person.isDead(true);
            }
            person.prop('pid', data.getElementsByTagName('ID')[0].textContent);
            const maxWidth = paper.getOriginalPaper().options.width;
            const maxHeight = paper.getOriginalPaper().options.height;
            if (position.x + constants_1.DiagramConstant.OFFSET_PARAM.icon * 2 > maxWidth) {
            	var newWidth = Number(position.x + constants_1.DiagramConstant.OFFSET_PARAM.icon * 3);
            	paper.getOriginalPaper().options.width = newWidth;
            	var temppaper = document.getElementById('paper');
                temppaper.style.width = newWidth;
            	//input.x = maxWidth - constants_1.DiagramConstant.OFFSET_PARAM.icon * 2;
            }
            if (position.y + constants_1.DiagramConstant.OFFSET_PARAM.icon * 2 > maxHeight) {
            	var newHeight = Number(position.y + constants_1.DiagramConstant.OFFSET_PARAM.icon * 3);
                //input.y = maxHeight - constants_1.DiagramConstant.OFFSET_PARAM.icon * 2;
                paper.getOriginalPaper().options.height = newHeight;
                var temppaper = document.getElementById('paper');
                temppaper.style.height = newHeight;
            }
        });
    }
    /**
     *xml生態圈產生器
     *
     * @private
     * @param {*} ecoNodes
     * @memberof Paper
     */
    _ecoGenerator(ecoNodes) {
        const self = this;
        [].forEach.call(ecoNodes, function (data) {
            if (data.getElementsByTagName('XPOS')[0] && data.getElementsByTagName('YPOS')[0]) {
                const position = {
                    x: constants_1.DiagramConstant.OFFSET_PARAM.positionScale *
                        (+data.getElementsByTagName('XPOS')[0].textContent),
                    y: constants_1.DiagramConstant.OFFSET_PARAM.positionScale *
                        (+data.getElementsByTagName('YPOS')[0].textContent)
                };
                const polygon = new EcologySphere(self, position);
                polygon.setContent(data.getElementsByTagName('MEMO')[0].textContent);
                polygon.prop('eid', data.getElementsByTagName('ID')[0].textContent);
                /* by Nick 自動調整畫布*/
                const maxWidth = paper.getOriginalPaper().options.width;
                const maxHeight = paper.getOriginalPaper().options.height;
                if (position.x + constants_1.DiagramConstant.ECOLOGY_SPHERE_PARAM.size.width > maxWidth) {
                	var newWidth = position.x + constants_1.DiagramConstant.ECOLOGY_SPHERE_PARAM.size.width + constants_1.DiagramConstant.OFFSET_PARAM.icon;
                	paper.getOriginalPaper().options.width = newWidth;
                	var temppaper = document.getElementById('paper');
                    temppaper.style.width = newWidth;
                	//input.x = maxWidth - constants_1.DiagramConstant.OFFSET_PARAM.icon * 2;
                }
                if (position.y + constants_1.DiagramConstant.ECOLOGY_SPHERE_PARAM.size.height > maxHeight) {
                	var newHeight = position.y + constants_1.DiagramConstant.ECOLOGY_SPHERE_PARAM.size.height + constants_1.DiagramConstant.OFFSET_PARAM.icon;
                    //input.y = maxHeight - constants_1.DiagramConstant.OFFSET_PARAM.icon * 2;
                    paper.getOriginalPaper().options.height = newHeight;
                    var temppaper = document.getElementById('paper');
                    temppaper.style.height = newHeight;
                }
            }
        });
    }
    /**
     * xml文字註解產生器
     *
     * @private
     * @param {*} textAreaNode
     * @memberof Paper
     */
    _textAreaGenerator(textAreaNode) {
        const self = this;
        [].forEach.call(textAreaNode, function (data) {
            if (data.getElementsByTagName('XPOS')[0] && data.getElementsByTagName('YPOS')[0]) {
                const position = {
                    x: constants_1.DiagramConstant.OFFSET_PARAM.positionScale *
                        (+data.getElementsByTagName('XPOS')[0].textContent),
                    y: constants_1.DiagramConstant.OFFSET_PARAM.positionScale *
                        (+data.getElementsByTagName('YPOS')[0].textContent)
                };
                const textArea = new TextArea(self, position);
                textArea.setContent(data.getElementsByTagName('MEMO')[0].textContent);
            }
        });
    }
    /**
     * xml生活圈產生器
     *
     * @private
     * @param {*} ecoNodes
     * @memberof Paper
     */
    _lifeGenerator(ecoNodes) {
        const self = this;
        [].forEach.call(ecoNodes, function (data) {
            if (data.getElementsByTagName('POINTS')[0]) {
                const pos = data.getElementsByTagName('POINTS')[0].getElementsByTagName('POINT');
                const positions = [];
                const xs = [];
                const ys = [];
                [].forEach.call(pos, function (data) {
                    const x = +data.getElementsByTagName('POINTX')[0].textContent;
                    const y = +data.getElementsByTagName('POINTY')[0].textContent;
                    positions.push({
                        x: x * constants_1.DiagramConstant.OFFSET_PARAM.positionScale,
                        y: y * constants_1.DiagramConstant.OFFSET_PARAM.positionScale
                    });
                    xs.push(x);
                    ys.push(y);
                });
                const options = JSON.parse(JSON.stringify(constants_1.DiagramConstant.LIFE_SPHERE_PARAM));
                options.size = {
                    width: (Math.max.apply(null, xs) - Math.min.apply(null, xs)) *
                        constants_1.DiagramConstant.OFFSET_PARAM.positionScale,
                    height: (Math.max.apply(null, ys) - Math.max.apply(null, ys)) *
                        constants_1.DiagramConstant.OFFSET_PARAM.positionScale
                };
                options.attrs.body.refPoints = utils_1.DiagramUtils.toPositionArray(positions).join(' ');
                const polygon = new LifeSphere(self, {
                    x: (Math.min.apply(null, xs) + 10) * constants_1.DiagramConstant.OFFSET_PARAM.positionScale,
                    y: (Math.min.apply(null, ys) + 10) * constants_1.DiagramConstant.OFFSET_PARAM.positionScale
                }, options);
                polygon.prop('eid', data.getElementsByTagName('ID')[0].textContent);
                /* by Nick 自動調整畫布*/
                const maxWidth = paper.getOriginalPaper().options.width;
                const maxHeight = paper.getOriginalPaper().options.height;
                var maxposiX = 0;			//最右邊的位置,預設為中心點
                var maxposiY = 0;			//最下邊的位置,預設為中心點
            	var maxPointX = 0;
            	var maxPointY = 0;
            	for(var tmpIdx=0;tmpIdx<positions.length;tmpIdx++){
               		var tmpPosi = positions[tmpIdx];//.split(',');
            		if(maxPointX<Number(tmpPosi.x)){
            			maxPointX = Number(tmpPosi.x);
            		}
            		if(maxPointY<Number(tmpPosi.y)){
            			maxPointY = Number(tmpPosi.y);
            		}
            	}
            	maxposiX = maxposiX+maxPointX;
            	maxposiY = maxposiY+maxPointY;
            	if (maxposiX  > maxWidth) {
                	var newWidth = maxposiX+ constants_1.DiagramConstant.OFFSET_PARAM.icon;
                	paper.getOriginalPaper().options.width = newWidth;
                	var temppaper = document.getElementById('paper');
                    temppaper.style.width = newWidth;
                    //alert("input.x="+newWidth);
                }
                if (maxposiY > maxHeight) {
                	var newHeight = maxposiY + constants_1.DiagramConstant.OFFSET_PARAM.icon;
                    //input.y = maxHeight - constants_1.DiagramConstant.OFFSET_PARAM.icon * 2;
                    paper.getOriginalPaper().options.height = newHeight;
                    var temppaper = document.getElementById('paper');
                    temppaper.style.height = newHeight;
                }
            }
        });
    }
    /**
     * xml關聯線產生器
     *
     * @private
     * @param {*} relationNodes
     * @memberof Paper
     */
    _relationGenerator(relationNodes) {
        const self = this;
        const relationMap = {
            '0': 'normal-link',
            '1': 'double-link',
            '2': 'triple-link',
            '3': 'dash-link',
            '4': 'double-dash-link',
            '5': 'triple-dash-link',
            '6': 'double-vertical-link',
            '7': 'pulse-link',
            '8': 'double-line-pulse-link',
            '9': 'double-pulse-link',
            '10': 'boundary-double-pulse-link',
            '11': 'circle-link',
            '12': 'double-circle-link',
            '13': 'quadruple-pulse-link',
            '90': 'low-dependent-link',
            '91': 'medium-dependent-link',
            '92': 'high-dependent-link',
            '93': 'exclusion-link'
        };
        [].forEach.call(relationNodes, function (data) {
            const a = data.getElementsByTagName('A');
            const b = data.getElementsByTagName('B');
            const ea = data.getElementsByTagName('EA');
            const eb = data.getElementsByTagName('EB');
            let source;
            let target;
            if (a.length > 0) {
                source = self._findElementByPropAndId('pid', a[0].textContent);
            }
            if (b.length > 0) {
                target = self._findElementByPropAndId('pid', b[0].textContent);
            }
            if (ea.length > 0) {
                source = self._findElementByPropAndId('eid', ea[0].textContent);
            }
            if (eb.length > 0) {
                target = self._findElementByPropAndId('eid', eb[0].textContent);
            }
            source = source ?
                source.getElement() : {
                x: constants_1.DiagramConstant.OFFSET_PARAM.icon + (+data.getElementsByTagName('X1POS')[0].textContent) *
                    constants_1.DiagramConstant.OFFSET_PARAM.positionScale,
                y: constants_1.DiagramConstant.OFFSET_PARAM.icon + (+data.getElementsByTagName('Y1POS')[0].textContent) *
                    constants_1.DiagramConstant.OFFSET_PARAM.positionScale
            };
            target = target ?
                target.getElement() : {
                x: constants_1.DiagramConstant.OFFSET_PARAM.icon + (+data.getElementsByTagName('X2POS')[0].textContent) *
                    constants_1.DiagramConstant.OFFSET_PARAM.positionScale,
                y: constants_1.DiagramConstant.OFFSET_PARAM.icon + (+data.getElementsByTagName('Y2POS')[0].textContent) *
                    constants_1.DiagramConstant.OFFSET_PARAM.positionScale
            };
            const link = utils_1.DiagramUtils
                .generators[relationMap[data.getElementsByTagName('TYPE')[0].textContent]](self, source, target);
            link.setLinkTools(['targetHead', 'sourceHead']);
        });
    }
    /**
     * xml配偶線產生器
     *
     * @private
     * @param {*} xml
     * @memberof Paper
     */
    _spouseGenerator(xml) {
        const self = this;
        const spouseMap = {
            '0': 'normal-link',
            '1': 'slash-link',
            '2': 'double-slash-link',
            '3': 'dash-link',
            '4': 'back-slash-link'
        };
        [].forEach.call(xml.getElementsByTagName('SPOUSELINEOBJECT'), function (data) {
            const a = data.getElementsByTagName('A');
            const b = data.getElementsByTagName('B');
            let left = self._findElementByPropAndId('pid', a[0].textContent);
            let right = self._findElementByPropAndId('pid', b[0].textContent);
            let link;
            if (left && right) {
                left = left.getElement();
                right = right.getElement();
                link = utils_1.DiagramUtils
                    .generators[spouseMap[data.getElementsByTagName('TYPE')[0].textContent]](self, left, right);
                let spouseLevel = left.prop('spouseLevel');
                link.getMajorLink().source(left, utils_1.DiagramUtils.getAnchor(spouseLevel % 3));
                link.getMajorLink().target(right, utils_1.DiagramUtils.getAnchor(spouseLevel % 3));
                const leftSpouses = left.prop('spouses');
                leftSpouses.push(link.getMajorLink().id);
                spouseLevel++;
                left.prop('spouseLevel', spouseLevel);
                left.prop('spouses', leftSpouses);
                right.prop('spouses', [link.getMajorLink().id]);
                link.prop('childs', []);
                const child = data.getElementsByTagName('CHILDREN');
                if (child.length > 0) {
                    self._childGenerator(xml, child, left, right, link);
                }
            }
        });
    }
    /**
     * xml婚生子女線產生器
     *
     * @private
     * @param {*} xml
     * @param {*} child
     * @param {*} left
     * @param {*} right
     * @param {*} sourceLink
     * @memberof Paper
     */
    _childGenerator(xml, child, left, right, sourceLink) {
        const self = this;
        const childArr = [].filter.call(xml.getElementsByTagName('CHILDRENLINEOBJECT'), function (childLine) {
            return childLine.getElementsByTagName('ID')[0].textContent === child[0].textContent;
        });
        let siblingArr;
        if (childArr.length > 0) {
            siblingArr = [].filter.call(xml.getElementsByTagName('SIBLINGLINEOBJECT'), function (siblingLine) {
                return siblingLine.getElementsByTagName('ID')[0].textContent ===
                    childArr[0].getElementsByTagName('CHILD')[0].textContent;
            });
        }
        if (siblingArr.length > 0) {
            const childs = [];
            [].forEach.call(siblingArr[0].getElementsByTagName('SELF'), function (kid) {
                const childSource = {
                    x: (right.position().x + left.position().x) / 2 + constants_1.DiagramConstant.OFFSET_PARAM.icon,
                    y: (left.position().y + right.position().y) / 2 +
                        utils_1.DiagramUtils.anchorOffset(sourceLink.getMajorLink().target()) *
                            constants_1.DiagramConstant.OFFSET_PARAM.icon
                };
                const siblingNode = kid.parentElement;
                // twins handle
                const child = self._findElementByPropAndId('pid', kid.textContent);
                if (siblingNode.getElementsByTagName('TWINELDER')[0].textContent === '') {
                    childs.push(child.getElement().id);
                    if (child) {
                        const childLink = new NormalLink(self, child.getElement(), childSource);
                        childLink.getMajorLink().router('orthogonal');
                        const orgChilds = sourceLink.prop('childs');
                        orgChilds.push(child.getElement().id);
                        if (child.getElement().position().x + constants_1.DiagramConstant.OFFSET_PARAM.icon !== childSource.x) {
                            const vertices = [
                                {
                                    x: child.getElement().position().x + constants_1.DiagramConstant.OFFSET_PARAM.icon,
                                    y: (child.getElement().position().y + childSource.y) / 2
                                },
                                {
                                    x: childSource.x, y: (child.getElement().position().y + childSource.y) / 2
                                }
                            ];
                            childLink.getMajorLink().vertices(vertices);
                        }
                        utils_1.DiagramUtils.bindChildEvent(left, right, child.getElement(), sourceLink.getMajorLink(), childLink.getMajorLink());
                        childLink.prop('sourceLink', sourceLink.getMajorLink().id);
                        sourceLink.prop('childs', orgChilds);
                        child.prop('parents', sourceLink.getMajorLink().id);
                        child.prop('childLink', childLink.getMajorLink().id);
                    }
                }
                else {
                    const twinsHead = self
                        ._findElementByPropAndId('pid', siblingNode.getElementsByTagName('TWINELDER')[0].textContent);
                    const childLink = self.findByModelId(twinsHead.prop('childLink'));
                    let targetPos = {
                        x: twinsHead.getElement().position().x + constants_1.DiagramConstant.OFFSET_PARAM.icon,
                        y: twinsHead.getElement().position().y - constants_1.DiagramConstant.OFFSET_PARAM.icon * 2
                    };
                    const parent = self.findByModelId(twinsHead.prop('parents'));
                    if (childLink.getMajorLink().vertices().length > 0) {
                        targetPos = childLink.getMajorLink().vertices()[0];
                    }
                    else {
                        targetPos.y = (childLink.getMajorLink().target().y + twinsHead.getElement().position().y) / 2;
                    }
                    const twinsLink = new NormalLink(self, child.getElement(), targetPos);
                    utils_1.DiagramUtils.bindTwinsEvent(self, parent, twinsHead, twinsLink, childLink);
                    const twins = [twinsHead.getElement().id, child.getElement().id];
                    child.prop('twinsLink', twinsLink);
                    child.prop('twins', twins);
                    twinsHead.prop('twins', twins);
                }
            });
            childs.forEach(function (siblingId) {
                const sibling = self.findByModelId(siblingId);
                sibling.prop('sibling', childs);
            });
        }
    }
    /**
     * 非婚生子女線產生器
     *
     * @private
     * @param {*} xml
     * @memberof Paper
     */
    _illegitimateChildGenerator(xml) {
        const self = this;
        [].forEach.call(xml.getElementsByTagName('CHILDRENLINEOBJECT'), function (childLine) {
            let parentObj;
            if (childLine.getElementsByTagName('PARENT').length > 0) {
                parentObj = self
                    ._findElementByPropAndId('pid', childLine.getElementsByTagName('PARENT')[0].textContent);
            }
            if (parentObj) {
                const adoptions = [];
                [].forEach.call(xml.getElementsByTagName('SIBLINGLINEOBJECT'), function (sibling) {
                    let childObj;
                    if (childLine.getElementsByTagName('CHILD')[0].textContent ===
                        sibling.getElementsByTagName('ID')[0].textContent) {
                        [].forEach.call(sibling.getElementsByTagName('SELF'), function (kid) {
                            childObj = self._findElementByPropAndId('pid', kid.textContent);
                            // twins handle
                            const siblingNode = kid.parentElement;
                            if (siblingNode.getElementsByTagName('TWINELDER')[0].textContent === '') {
                                if (childObj) {
                                    adoptions.push(childObj.getElement().id);
                                    const childLink = new NormalLink(self, childObj.getElement(), parentObj.getElement());
                                    childLink.getMajorLink().router('orthogonal');
                                    if (childObj.getElement().position().x !== parentObj.getElement().position().x) {
                                        const vertices = [
                                            {
                                                x: childObj.getElement().position().x +
                                                    constants_1.DiagramConstant.OFFSET_PARAM.icon,
                                                y: (childObj.getElement().position().y + parentObj.y) / 2
                                            },
                                            {
                                                x: parentObj.getElement().x,
                                                y: (childObj.getElement().position().y + parentObj.getElement().y) / 2
                                            }
                                        ];
                                        childLink.getMajorLink().vertices(vertices);
                                    }
                                    utils_1.DiagramUtils.bindIllegitimateChild(parentObj.getElement(), childObj.getElement(), childLink.getMajorLink());
                                    childObj.prop('parents', parentObj.getElement().id);
                                }
                            }
                            else {
                                const twinsHead = self._findElementByPropAndId('pid', siblingNode.getElementsByTagName('TWINELDER')[0].textContent);
                                const childLink = self.findByModelId(twinsHead.prop('childLink'));
                                const parent = self.findByModelId(twinsHead.prop('parents'));
                                const targetPos = {
                                    x: twinsHead.getElement().position().x + constants_1.DiagramConstant.OFFSET_PARAM.icon,
                                    y: (parent.getElement().position().y + twinsHead.getElement().position().y) / 2
                                };
                                const twinsLink = new NormalLink(self._paper, childObj.getElement(), targetPos);
                                utils_1.DiagramUtils.bindTwinsEvent(self, parent, twinsHead, twinsLink, childLink);
                                const twins = [twinsHead.getElement().id, childObj.getElement().id];
                                childObj.prop('twinsLink', twinsLink);
                                childObj.prop('twins', twins);
                                twinsHead.prop('twins', twins);
                            }
                        });
                    }
                });
                adoptions.forEach(function (siblingId) {
                    const sibling = self.findByModelId(siblingId);
                    sibling.prop('sibling', adoptions);
                });
                parentObj.prop('adoption', adoptions);
            }
        });
    }
    /**
     * 僅手足產生器
     *
     * @private
     * @param {*} xml
     * @memberof Paper
     */
    _siblingGenerator(xml) {
        const self = this;
        [].forEach.call(xml.getElementsByTagName('SIBLINGLINEOBJECT'), function (siblingLine) {
            if (siblingLine.getElementsByTagName('PARENT').length === 0) {
                const siblingArr = siblingLine.getElementsByTagName('SELF');
                const siblings = [].map.call(siblingArr, function (sibling) {
                    return self._findElementByPropAndId('pid', sibling.textContent);
                });
                const siblingIds = siblings.map(function (sibling) {
                    return sibling.getElement().id;
                });
                const maxX = Math.max.apply(null, siblings.map(function (sibling) {
                    return sibling.getElement().position().x;
                }));
                const minX = Math.min.apply(null, siblings.map(function (sibling) {
                    return sibling.getElement().position().x;
                }));
                const siblingSource = {
                    x: constants_1.DiagramConstant.OFFSET_PARAM.icon + (maxX + minX) / 2,
                    y: siblings[0].getElement().position().y - constants_1.DiagramConstant.OFFSET_PARAM.icon * 2
                };
                siblings.forEach(function (sibling) {
                    const link = new NormalLink(self, sibling.getElement(), siblingSource);
                    link.getMajorLink().router('orthogonal');
                    sibling.prop('childLink', link.getMajorLink().id);
                    const vertices = [
                        {
                            x: sibling.getElement().position().x + constants_1.DiagramConstant.OFFSET_PARAM.icon, y: siblingSource.y
                        }
                    ];
                    link.getMajorLink().vertices(vertices);
                    sibling.prop('sibling', siblingIds);
                });
            }
        });
    }
    /**
     * 依照xml屬性及id尋找物件
     *
     * @private
     * @param {string} prop
     * @param {number} id
     * @returns {*}
     * @memberof Paper
     */
    _findElementByPropAndId(prop, id) {
        const arr = this.getElements().filter(function (ele) {
            return ele.prop(prop) === id;
        });
        return arr.length > 0 ? arr[0] : undefined;
    }
    /**
     * 依model id尋找物件
     *
     * @param {string} id
     * @returns {*}
     * @memberof Paper
     */
    findByModelId(id) {
        let returnElement = [];
        const elements = this.getElements().filter(function (ele) {
            return ele.getElement().id === id;
        });
        const links = this.getLinks().filter(function (link) {
            return link.getMajorLink().id === id;
        });
        if (elements.length > 0) {
            returnElement = elements;
        }
        if (links.length > 0) {
            returnElement = links;
        }
        return returnElement.length > 0 ? returnElement[0] : undefined;
    }
}
exports.Paper = Paper;

},{"./constants":1,"./utils":3}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const constants_1 = require("./constants");
/**
 * utils 類
 *
 * @export
 * @class DiagramUtils
 */
class DiagramUtils {
    /**
     * 座標物件陣列轉二維座標陣列
     *
     * @static
     * @param {PositionInterface[]} arr
     * @returns {string[]}
     * @memberof DiagramUtils
     */
    static toPositionArray(arr) {
        const returnArr = [];
        arr.forEach(function (xy) {
            returnArr.push(`${xy.x},${xy.y}`);
        });
        return returnArr;
    }
    /**
     * 二維座標陣列轉座標物件陣列
     *
     * @static
     * @param {string[]} arr
     * @returns {PositionInterface[]}
     * @memberof DiagramUtils
     */
    static toXYArray(arr) {
        const returnArr = [];
        arr.forEach(function (position) {
            returnArr.push({ x: +position.split(',')[0], y: +position.split(',')[1] });
        });
        return returnArr;
    }
    /**
     * 依參數取得anchor名稱
     *
     * @static
     * @param {number} param
     * @returns
     * @memberof DiagramUtils
     */
    static getAnchor(param) {
        const returnArr = [
            {
                anchor: { name: 'bottom' }
            },
            {},
            {
                anchor: { name: 'top' }
            }
        ];
        return returnArr[param];
    }
    /**
     * 依anchor名稱取得篇偏移量
     *
     * @static
     * @param {*} anchor
     * @returns
     * @memberof DiagramUtils
     */
    static anchorOffset(anchor) {
        let returnOffset = 1;
        if (anchor.anchor) {
            if (anchor.anchor.name === 'top') {
                returnOffset = 0;
            }
            if (anchor.anchor.name === 'bottom') {
                returnOffset = 2;
            }
        }
        return returnOffset;
    }
    /**
     * 非婚生子女link hook
     *
     * @static
     * @param {*} parent
     * @param {*} adoption
     * @param {*} childLink
     * @memberof DiagramUtils
     */
    static bindIllegitimateChild(parent, adoption, childLink) {
        adoption.on('change:position', function () {
            const vertices = [
                {
                    x: adoption.position().x + constants_1.DiagramConstant.OFFSET_PARAM.icon,
                    y: (adoption.position().y + parent.position().y) / 2
                },
                {
                    x: parent.position().x + constants_1.DiagramConstant.OFFSET_PARAM.icon,
                    y: (adoption.position().y + parent.position().y) / 2
                }
            ];
            adoption.position().x === parent.position().x ?
                childLink.vertices([]) :
                childLink.vertices(vertices);
        });
        parent.on('change:position', function () {
            const vertices = [
                {
                    x: adoption.position().x + constants_1.DiagramConstant.OFFSET_PARAM.icon,
                    y: (adoption.position().y + parent.position().y) / 2
                },
                {
                    x: parent.position().x + constants_1.DiagramConstant.OFFSET_PARAM.icon,
                    y: (adoption.position().y + parent.position().y) / 2
                }
            ];
            adoption.position().x === parent.position().x ?
                childLink.vertices([]) :
                childLink.vertices(vertices);
        });
    }
    /**
     * 婚生子女link hook
     *
     * @static
     * @param {*} left
     * @param {*} right
     * @param {*} child
     * @param {*} sourceLink
     * @param {*} childLink
     * @memberof DiagramUtils
     */
    static bindChildEvent(left, right, child, sourceLink, childLink) {
        right.on('change:position', function () {
            const childSource = {
                x: (left.position().x + right.position().x) / 2 + constants_1.DiagramConstant.OFFSET_PARAM.icon,
                y: (left.position().y + right.position().y) / 2 +
                    DiagramUtils.anchorOffset(sourceLink.target()) * constants_1.DiagramConstant.OFFSET_PARAM.icon
            };
            const vertices = [
                {
                    x: child.position().x + constants_1.DiagramConstant.OFFSET_PARAM.icon,
                    y: (child.position().y + childSource.y) / 2
                },
                { x: childSource.x, y: (child.position().y + childSource.y) / 2 }
            ];
            childLink.target(childSource);
            child.position().x + constants_1.DiagramConstant.OFFSET_PARAM.icon === childSource.x ?
                childLink.vertices([]) :
                childLink.vertices(vertices);
        });
        left.on('change:position', function () {
            const childSource = {
                x: (left.position().x + right.position().x) / 2 + constants_1.DiagramConstant.OFFSET_PARAM.icon,
                y: (left.position().y + right.position().y) / 2 +
                    DiagramUtils.anchorOffset(sourceLink.target()) * constants_1.DiagramConstant.OFFSET_PARAM.icon
            };
            const vertices = [
                {
                    x: child.position().x + constants_1.DiagramConstant.OFFSET_PARAM.icon,
                    y: (child.position().y + childSource.y) / 2
                },
                { x: childSource.x, y: (child.position().y + childSource.y) / 2 }
            ];
            childLink.target(childSource);
            child.position().x + constants_1.DiagramConstant.OFFSET_PARAM.icon === childSource.x ?
                childLink.vertices([]) :
                childLink.vertices(vertices);
        });
        child.on('change:position', function () {
            const childSource = {
                x: (left.position().x + right.position().x) / 2 + constants_1.DiagramConstant.OFFSET_PARAM.icon,
                y: (left.position().y + right.position().y) / 2 +
                    DiagramUtils.anchorOffset(sourceLink.target()) * constants_1.DiagramConstant.OFFSET_PARAM.icon
            };
            const vertices = [
                {
                    x: child.position().x + constants_1.DiagramConstant.OFFSET_PARAM.icon,
                    y: (child.position().y + childSource.y) / 2
                },
                { x: childSource.x, y: (child.position().y + childSource.y) / 2 }
            ];
            childLink.target(childSource);
            child.position().x + constants_1.DiagramConstant.OFFSET_PARAM.icon === childSource.x ?
                childLink.vertices([]) :
                childLink.vertices(vertices);
        });
    }
    /**
     * 孿生link hook
     *
     * @static
     * @param {*} paper
     * @param {*} parent
     * @param {*} twinsHead
     * @param {*} twinsLink
     * @param {*} childLink
     * @memberof DiagramUtils
     */
    static bindTwinsEvent(paper, parent, twinsHead, twinsLink, childLink) {
        if (parent) {
            let targetPos = {};
            if (parent instanceof index_1.Male ||
                parent instanceof index_1.Female) {
                parent.getElement().on('change:position', function () {
                    if (childLink.getMajorLink().vertices().length > 0) {
                        targetPos = childLink.getMajorLink().vertices()[0];
                    }
                    else {
                        targetPos.y = (childLink.getMajorLink().target().y + twinsHead.getElement().position().y) / 2;
                        targetPos.x = twinsHead.getElement().position().x + constants_1.DiagramConstant.OFFSET_PARAM.icon;
                    }
                    twinsLink.getMajorLink().target(targetPos);
                });
            }
            else {
                const sourceLink = paper.findByModelId(twinsHead.prop('parents'));
                const left = paper.findByModelId(sourceLink.getMajorLink().source().id);
                const right = paper.findByModelId(sourceLink.getMajorLink().target().id);
                left.getElement().on('change:position', function () {
                    if (childLink.getMajorLink().vertices().length > 0) {
                        targetPos = childLink.getMajorLink().vertices()[0];
                    }
                    else {
                        targetPos.y = (childLink.getMajorLink().target().y + twinsHead.getElement().position().y) / 2;
                        targetPos.x = twinsHead.getElement().position().x + constants_1.DiagramConstant.OFFSET_PARAM.icon;
                    }
                    twinsLink.getMajorLink().target(targetPos);
                });
                right.getElement().on('change:position', function () {
                    if (childLink.getMajorLink().vertices().length > 0) {
                        targetPos = childLink.getMajorLink().vertices()[0];
                    }
                    else {
                        targetPos.y = (childLink.getMajorLink().target().y + twinsHead.getElement().position().y) / 2;
                        targetPos.x = twinsHead.getElement().position().x + constants_1.DiagramConstant.OFFSET_PARAM.icon;
                    }
                    twinsLink.getMajorLink().target(targetPos);
                });
            }
        }
        twinsHead.getElement().on('change:position', function () {
            let targetPos = {};
            if (parent) {
                if (parent instanceof index_1.Male ||
                    parent instanceof index_1.Female) {
                    targetPos.y = (parent.getElement().position().y + twinsHead.getElement().position().y) / 2;
                }
                else {
                    if (childLink.getMajorLink().vertices().length > 0) {
                        targetPos = childLink.getMajorLink().vertices()[0];
                    }
                    else {
                        targetPos.y = (childLink.getMajorLink().target().y + twinsHead.getElement().position().y) / 2;
                    }
                }
                targetPos.x = twinsHead.getElement().position().x + constants_1.DiagramConstant.OFFSET_PARAM.icon;
            }
            else {
                targetPos = childLink.getMajorLink().target();
            }
            twinsLink.getMajorLink().target(targetPos);
        });
    }
    /**
     * 物件座標超出畫布和諧處理
     * @param input 輸入座標
     * @param paper 畫布
     */
    static positionHarmony(input, paper) {
        const maxWidth = paper.getOriginalPaper().options.width;
        const maxHeight = paper.getOriginalPaper().options.height;
        /* by Nick 自動調整畫布*/
        var maxposiX = Number(input.x);			//最右邊的位置,預設為中心點
        var maxposiY = Number(input.y);			//最下邊的位置,預設為中心點
        //debugger;
        if(input.tistType=="ecology-sphere"){	//生態圈
        	if (maxposiX < 0) {
        		maxposiX = constants_1.DiagramConstant.ECOLOGY_SPHERE_PARAM.size.width;
        	}
        	if (maxposiY < 0) {
        		maxposiY = constants_1.DiagramConstant.ECOLOGY_SPHERE_PARAM.size.height;
        	}
        	maxposiX = maxposiX+constants_1.DiagramConstant.ECOLOGY_SPHERE_PARAM.size.width;
        	maxposiY = maxposiY+constants_1.DiagramConstant.ECOLOGY_SPHERE_PARAM.size.height;
        }else if(input.tistType=="life-sphere"){	//生活圈
        	//debugger;
        	var tmpPoint = input.attrs.body.refPoints.split(' ');
        	var maxPointX = 0;
        	var maxPointY = 0;
        	for(var tmpIdx=0;tmpIdx<tmpPoint.length;tmpIdx++){
        		var tmpPosi = tmpPoint[tmpIdx].split(',');
        		if(maxPointX<Number(tmpPosi[0])){
        			maxPointX = Number(tmpPosi[0]);
        		}
        		if(maxPointY<Number(tmpPosi[1])){
        			maxPointY = Number(tmpPosi[1]);
        		}
        	}
        	//debugger;
        	if(input.newRefPoints){
        		//debugger;
        		tmpPoint = cell.newRefPoints.split(' ');
        		for(var tmpIdx=0;tmpIdx<tmpPoint.length;tmpIdx++){
            		var tmpPosi = tmpPoint[tmpIdx].split(',');
            		if(maxPointX<Number(tmpPosi[0])){
            			maxPointX = Number(tmpPosi[0]);
            		}
            		if(maxPointY<Number(tmpPosi[1])){
            			maxPointY = Number(tmpPosi[1]);
            		}
            	}
        	}
        	//debugger;
        	maxposiX = maxposiX+maxPointX;
        	maxposiY = maxposiY+maxPointY;
        	//debugger;
        }else{
        	maxposiX = maxposiX+constants_1.DiagramConstant.OFFSET_PARAM.icon * 2;
        	maxposiY = maxposiY+constants_1.DiagramConstant.OFFSET_PARAM.icon * 2;
        }
        if (maxposiX  > maxWidth) {
        	var newWidth = maxposiX+ constants_1.DiagramConstant.OFFSET_PARAM.icon;
        	paper.getOriginalPaper().options.width = newWidth;
        	var temppaper = document.getElementById('paper');
            temppaper.style.width = newWidth;
            //alert("input.x="+newWidth);
        }
        if (maxposiY > maxHeight) {
        	var newHeight = maxposiY + constants_1.DiagramConstant.OFFSET_PARAM.icon;
            //input.y = maxHeight - constants_1.DiagramConstant.OFFSET_PARAM.icon * 2;
            paper.getOriginalPaper().options.height = newHeight;
            var temppaper = document.getElementById('paper');
            temppaper.style.height = newHeight;
        }
        /*
        if (input.x < 0) {
            input.x = 0;
        }
        else if (input.x + constants_1.DiagramConstant.OFFSET_PARAM.icon * 2 > maxWidth) {
        	var newWidth = Number(input.x + constants_1.DiagramConstant.OFFSET_PARAM.icon * 2);
        	paper.getOriginalPaper().options.width = newWidth;
        	var temppaper = document.getElementById('paper');
            temppaper.style.width = newWidth;
        	//input.x = maxWidth - constants_1.DiagramConstant.OFFSET_PARAM.icon * 2;
        }
        if (input.y < 0) {
            input.y = 0;
        }
        else if (input.y + constants_1.DiagramConstant.OFFSET_PARAM.icon * 2 > maxHeight) {
        	var newHeight = Number(maxHeight) + 125;
            //input.y = maxHeight - constants_1.DiagramConstant.OFFSET_PARAM.icon * 2;
            paper.getOriginalPaper().options.height = newHeight;
            var temppaper = document.getElementById('paper');
            temppaper.style.height = newHeight;
        }
        */
        return input;
    }
}
exports.DiagramUtils = DiagramUtils;
/**
 * 類型產生器
 *
 * @static
 * @type {*}
 * @memberof DiagramUtils
 */
DiagramUtils.generators = {
    'normal-link': function (paper, source, target, attr) {
        return new index_1.NormalLink(paper, source, target, attr);
    },
    'harmonious-link': function (paper, source, target, attr) {
        if (attr === undefined) {
            attr = constants_1.DiagramConstant.HARMONIOUS_LINK_PARAM;
        }
        return new index_1.NormalLink(paper, source, target, attr);
    },
    'double-link': function (paper, source, target, attr) {
        return new index_1.TripleLink(paper, source, target, attr);
    },
    'triple-link': function (paper, source, target, attr) {
        if (attr === undefined) {
            attr = constants_1.DiagramConstant.TRIPLE_LINK_PARAM;
        }
        return new index_1.TripleLink(paper, source, target, attr);
    },
    'dash-link': function (paper, source, target, attr) {
        if (attr === undefined) {
            attr = constants_1.DiagramConstant.DASH_LINK_PARAM;
        }
        return new index_1.NormalLink(paper, source, target, attr);
    },
    'double-dash-link': function (paper, source, target, attr) {
        if (attr === undefined) {
            attr = constants_1.DiagramConstant.DOUBLE_DASH_LINK_PARAM;
        }
        return new index_1.TripleLink(paper, source, target, attr);
    },
    'triple-dash-link': function (paper, source, target, attr) {
        if (attr === undefined) {
            attr = constants_1.DiagramConstant.TRIPLE_DASH_LINK_PARAM;
        }
        return new index_1.TripleLink(paper, source, target, attr);
    },
    'double-vertical-link': function (paper, source, target, attr) {
        return new index_1.DoubleVerticalLink(paper, source, target, attr);
    },
    'pulse-link': function (paper, source, target, attr) {
        return new index_1.PulseLink(paper, source, target, attr);
    },
    'double-pulse-link': function (paper, source, target, attr) {
        return new index_1.DoublePulseLink(paper, source, target, attr);
    },
    'double-line-pulse-link': function (paper, source, target, attr) {
        return new index_1.DoubleLinePulseLink(paper, source, target, attr);
    },
    'boundary-double-pulse-link': function (paper, source, target, attr) {
        return new index_1.BoundaryDoublePulseLink(paper, source, target, attr);
    },
    'quadruple-pulse-link': function (paper, source, target, attr) {
        return new index_1.QuadruplePulseLink(paper, source, target, attr);
    },
    'circle-link': function (paper, source, target, attr) {
        return new index_1.CircleLink(paper, source, target, attr);
    },
    'double-circle-link': function (paper, source, target, attr) {
        return new index_1.DoubleCircleLink(paper, source, target, attr);
    },
    'rex-link': function (paper, source, target, attr) {
        return new index_1.RexDashLink(paper, source, target, attr);
    },
    'slash-link': function (paper, source, target, attr) {
        return new index_1.SlashLink(paper, source, target, attr);
    },
    'double-slash-link': function (paper, source, target, attr) {
        return new index_1.DoubleSlashLink(paper, source, target, attr);
    },
    'back-slash-link': function (paper, source, target, attr) {
        return new index_1.BackSlashDashLink(paper, source, target, attr);
    },
    'low-dependent-link': function (paper, source, target, attr) {
        if (attr === undefined) {
            attr = constants_1.DiagramConstant.LOW_DEPENDENT_LINK_PARAM;
        }
        return new index_1.NormalLink(paper, source, target, attr);
    },
    'medium-dependent-link': function (paper, source, target, attr) {
        if (attr === undefined) {
            attr = constants_1.DiagramConstant.MEDIUM_DEPENDENT_LINK_PARAM;
        }
        return new index_1.TripleLink(paper, source, target, attr);
    },
    'high-dependent-link': function (paper, source, target, attr) {
        if (attr === undefined) {
            attr = constants_1.DiagramConstant.HIGH_DEPENDENT_LINK_PARAM;
        }
        return new index_1.TripleLink(paper, source, target, attr);
    },
    'exclusion-link': function (paper, source, target, attr) {
        if (attr === undefined) {
            attr = constants_1.DiagramConstant.EXCLUSION_LINK_PARAM;
        }
        return new index_1.PulseLink(paper, source, target, attr);
    },
    'male': function (paper, position, attr) {
        return new index_1.Male(paper, position, attr);
    },
    'female': function (paper, position, attr) {
        return new index_1.Female(paper, position, attr);
    },
    'fetus': function (paper, position, attr) {
        return new index_1.Fetus(paper, position, attr);
    },
    'unknown': function (paper, position, attr) {
        return new index_1.Unknown(paper, position, attr);
    },
    'life-sphere': function (paper, position, attr) {
        return new index_1.LifeSphere(paper, position, attr);
    },
    'ecology-sphere': function (paper, position, attr) {
        return new index_1.EcologySphere(paper, position, attr);
    },
    'text-area': function (paper, position, attr) {
        return new index_1.TextArea(paper, position, attr);
    }
};

},{"./constants":1,"./index":2}],4:[function(require,module,exports){
(function (global){
global.tist = global.tist || {};
global.tist.diagram = require('./lib/index');
global.tist.diagram.constants = require('./lib/constants');
global.tist.diagram.utils = require('./lib/utils');
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./lib/constants":1,"./lib/index":2,"./lib/utils":3}]},{},[4]);
