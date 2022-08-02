export class EventPolyfill implements Event {
  readonly AT_TARGET: number = 0
  readonly BUBBLING_PHASE: number = 0
  readonly CAPTURING_PHASE: number = 0
  readonly NONE: number = 0

  public type: string = ''
  public srcElement: EventTarget | null = null
  public target: EventTarget | null
  public currentTarget: EventTarget | null = null
  public eventPhase: number = 0
  public timeStamp: number
  public isTrusted: boolean = true
  public composed: boolean = false
  public cancelable: boolean = true
  public defaultPrevented: boolean = false
  public bubbles: boolean = true
  public lengthComputable: boolean = true
  public loaded: number = 0
  public total: number = 0

  cancelBubble: boolean = false
  returnValue: boolean = true

  constructor(
    type: string,
    options?: { target: EventTarget; currentTarget: EventTarget }
  ) {
    this.type = type
    this.target = options?.target || null
    this.currentTarget = options?.currentTarget || null
    this.timeStamp = Date.now()
  }

  public composedPath(): EventTarget[] {
    return []
  }

  public initEvent(type: string, bubbles?: boolean, cancelable?: boolean) {
    this.type = type
    this.bubbles = !!bubbles
    this.cancelable = !!cancelable
  }

  public preventDefault() {
    this.defaultPrevented = true
  }

  public stopPropagation() {}
  public stopImmediatePropagation() {}
}
