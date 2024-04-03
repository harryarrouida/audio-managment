import React from "react";

export default function Success(props) {
  return (
    <div
      role="alert"
      class="rounded border-s-4 border-green-600 bg-green-200 p-4 mx-auto w-1/3 fixed top-3 left-3"
    >
      <strong class="block font-medium text-green-900">
        Success
      </strong>

      <p class="mt-2 text-sm text-green-800">{props.message}</p>
    </div>
  );
}
