import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';

import jQuery from 'jquery';
const $ = jQuery;
import froala from 'froala-editor/js/froala_editor.min';
froala(jQuery);


class Hello extends React.Component {
  constructor() {
    super();
    this.buttons = ['bold', 'italic', 'h2'];
  }

  componentDidMount() {

    $.FroalaEditor.DefineIcon('h2', {NAME: 'star'});
    $.FroalaEditor.RegisterCommand('h2', {
      title: 'H2',
      focus: true,
      undo: true,
      callback: function () {
        debugger;
        if (this.format.is('h2')) {
          this.paragraphFormat.apply('p');
        }
        else {
          this.paragraphFormat.apply('h2');
        }
      },
      refresh: function ($btn) {
        $btn.toggleClass('fr-active', this.format.is('h2'));
      }
    });

    $('#edit').froalaEditor({
      toolbarButtonsSM: this.buttons,
      toolbarButtonsMD: this.buttons,
      toolbarButtonsXS: this.buttons,
      toolbarButtons: this.buttons,
    });
  }

  render() {
    return (
      <textarea id="edit">
        some text
      </textarea>
    );
  }
}

ReactDOM.render(
  <Hello />,
  document.getElementById('container')
);
