import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';
import "@esri/calcite-components/dist/components/calcite-input.js";
import "@esri/calcite-components/dist/components/calcite-icon.js";

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return <div>Hello, World! I'm {this.getText()} and I'm using calcite-components!
      <calcite-icon icon="banana"></calcite-icon>
      <calcite-input autofocus></calcite-input>
    </div>;
  }
}
