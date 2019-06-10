import Vue from 'vue'

/** HeUI component common definition */
export declare class HeUIComponent extends Vue {
  /** Install component into Vue */
  static install (vue: typeof Vue): void
}

/** Component size definition for button, input, etc */
export type HeUIComponentSize = 'ex-large' | 'large' | 'medium' | 'small' | 'mini'

/** Horizontal alignment */
export type HeUIHorizontalAlignment = 'left' | 'center' | 'right'
