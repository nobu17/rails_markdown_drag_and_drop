import "inline-attachment/src/inline-attachment";
import "inline-attachment/src/codemirror-4.inline-attachment";
import 'simplemde/dist/simplemde.min.css'
import SimpleMDE from "simplemde";
import Rails from '@rails/ujs'

window.onload = function () {
  const simplemde = new SimpleMDE({
    element: document.getElementById("editor"),
  });
  inlineAttachment.editors.codemirror4.attach(simplemde.codemirror, {
    uploadUrl: "/articles/attach",
    uploadFieldName: "image",
    allowedTypes: ['image/jpeg', 'image/png', 'image/jpg', 'image/gif'],
    extraHeaders: { "X-CSRF-Token": Rails.csrfToken() },
  });
};

