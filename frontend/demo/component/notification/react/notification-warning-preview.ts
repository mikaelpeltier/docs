import 'Frontend/demo/init'; // hidden-source-line
import { html, LitElement } from 'lit';
import '@vaadin/button';
import '@vaadin/horizontal-layout';
import '@vaadin/icon';
import '@vaadin/notification';
import '@vaadin/vaadin-lumo-styles/vaadin-iconset';
import { applyTheme } from 'Frontend/generated/theme';

export class Example extends LitElement {
  protected override createRenderRoot() {
    const root = super.createRenderRoot();
    // Apply custom theme (only supported if your app uses one)
    applyTheme(root);
    return root;
  }

  protected override render() {
    return html`
      <vaadin-notification-card theme="warning" slot="middle">
        <vaadin-horizontal-layout theme="spacing" style="align-items: center;">
          <div>
            Your session will expire in 5 minutes due to inactivity.<br />
            Close this warning to continue working.
          </div>
          <vaadin-button theme="tertiary-inline">
            <vaadin-icon icon="lumo:cross"></vaadin-icon>
          </vaadin-button>
        </vaadin-horizontal-layout>
      </vaadin-notification-card>
    `;
  }
}
