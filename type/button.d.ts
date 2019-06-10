/** Button type */
import {HeUIComponent, HeUIComponentSize} from "./component";

export type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text'

/** Same as native button's type */
export type ButtonNativeType = 'button' | 'submit' | 'reset' | 'menu'

export declare class HeButton extends HeUIComponent {

  /** Button type */
  type: ButtonType;

  /** Button size */
  size: HeUIComponentSize;

  /** Determine whether it's a plain button */
  plain: boolean;

  /** Determine whether it's a round button */
  round: boolean;
}
