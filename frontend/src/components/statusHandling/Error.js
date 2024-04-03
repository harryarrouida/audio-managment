import React from "react";

export default function Error(props) {
  return (
    <div
      role="alert"
      class="rounded border-s-4 border-red-600 bg-red-200 p-4 mx-auto w-1/3 fixed top-3 left-3"
    >
      <strong class="block font-medium text-red-900">
        Something went wrong
      </strong>

      <p class="mt-2 text-sm text-red-800">{props.message}</p>
    </div>
  );
}
