jQuery("#simulation")
  .on("click", ".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Text_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimScrollTo",
                  "parameter": {
                    "target": [ "#s-BOOKS" ],
                    "axis": "scrollxy"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimScrollTo",
                  "parameter": {
                    "target": [ "#s-ABOUT" ],
                    "axis": "scrollxy"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimScrollTo",
                  "parameter": {
                    "target": [ "#s-NEWS" ],
                    "axis": "scrollxy"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimScrollTo",
                  "parameter": {
                    "target": [ "#s-CONTACT" ],
                    "axis": "scrollxy"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimScrollTo",
                  "parameter": {
                    "target": [ "#s-CONTACT" ],
                    "axis": "scrollxy"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimScrollTo",
                  "parameter": {
                    "target": [ "#s-NEWS" ],
                    "axis": "scrollxy"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimScrollTo",
                  "parameter": {
                    "target": [ "#s-ABOUT" ],
                    "axis": "scrollxy"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimScrollTo",
                  "parameter": {
                    "target": [ "#s-BOOKS" ],
                    "axis": "scrollxy"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseup", ".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .mouseup", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Rectangle_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Rectangle_12 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#282828"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Rectangle_12": {
                      "attributes-ie": {
                        "-pie-background": "#282828",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mousedown", ".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .mousedown", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Rectangle_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Rectangle_12 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#999999"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Rectangle_12": {
                      "attributes-ie": {
                        "-pie-background": "#999999",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Text_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Line_2" ],
                    "top": {
                      "type": "movetoposition",
                      "value": "25"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "29"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "easeInCubic",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Line_2" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "54"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Line_2" ],
                    "top": {
                      "type": "movetoposition",
                      "value": "25"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "134"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "easeInCubic",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Line_2" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "54"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Line_2" ],
                    "top": {
                      "type": "movetoposition",
                      "value": "25"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "242"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "easeInCubic",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Line_2" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "45"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Line_2" ],
                    "top": {
                      "type": "movetoposition",
                      "value": "25"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "339"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "easeInCubic",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Line_2" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "70"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "easeInCubic",
                      "duration": 500
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Line_2" ],
                    "top": {
                      "type": "movetoposition",
                      "value": "25"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "339"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "easeInCubic",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Line_2" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "70"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "easeInCubic",
                      "duration": 500
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Line_2" ],
                    "top": {
                      "type": "movetoposition",
                      "value": "25"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "242"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "easeInCubic",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Line_2" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "45"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Line_2" ],
                    "top": {
                      "type": "movetoposition",
                      "value": "25"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "134"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "easeInCubic",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Line_2" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "54"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Line_2" ],
                    "top": {
                      "type": "movetoposition",
                      "value": "25"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "29"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "easeInCubic",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Line_2" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "54"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Text_4") && (jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Text_4").length === 0 || jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Text_4") !== jFirer)) {
      event.stopPropagation();
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Line_2" ],
                    "top": {
                      "type": "movetoposition",
                      "value": "25"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "29"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "easeInCubic",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Line_2" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "54"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_9") && (jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Text_9").length === 0 || jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Text_9") !== jFirer)) {
      event.stopPropagation();
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Line_2" ],
                    "top": {
                      "type": "movetoposition",
                      "value": "25"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "29"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "easeInCubic",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Line_2" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "54"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_10") && (jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Text_10").length === 0 || jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Text_10") !== jFirer)) {
      event.stopPropagation();
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Line_2" ],
                    "top": {
                      "type": "movetoposition",
                      "value": "25"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "29"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "easeInCubic",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Line_2" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "54"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_10") && (jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Image_10").length === 0 || jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Image_10") !== jFirer)) {
      event.stopPropagation();
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Line_2" ],
                    "top": {
                      "type": "movetoposition",
                      "value": "25"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "29"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "easeInCubic",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Line_2" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "54"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_9") && (jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Image_9").length === 0 || jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Image_9") !== jFirer)) {
      event.stopPropagation();
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Line_2" ],
                    "top": {
                      "type": "movetoposition",
                      "value": "25"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "29"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "easeInCubic",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Line_2" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "54"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_8") && (jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Image_8").length === 0 || jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Image_8") !== jFirer)) {
      event.stopPropagation();
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Line_2" ],
                    "top": {
                      "type": "movetoposition",
                      "value": "25"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "29"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "easeInCubic",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Line_2" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "54"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Rectangle_12") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Rectangle_12 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#5E5E5E"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Rectangle_12": {
                      "attributes-ie": {
                        "-pie-background": "#5E5E5E",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Rectangle_12")) {
      jEvent.undoCases(jFirer);
    }
  });