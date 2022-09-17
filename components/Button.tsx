interface IButton {
  size: string;
  actionText: string;
  disabled: boolean;
}

export const Button: React.FC<IButton> = ({ size, actionText, disabled }) => (
  // eslint-disable-next-line jsx-a11y/no-redundant-roles
  <button
    disabled={disabled}
    role="button"
    className={`text-sm font-medium focus:outline-none text-gray-300 bg-blue-500 mt-2 hover:text-white ${
      size === "xl"
        ? "w-30 max-w-sm rounded-lg py-2 px-3 mx-3  inline-flex items-center justify-cente disabled:bg-gray-500 "
        : "inline-flex items-center justify-center rounded-lg w-20 py-2 px-2 text-sm disabled:bg-gray-500"
    }`}
  >
    {actionText}
  </button>
);
