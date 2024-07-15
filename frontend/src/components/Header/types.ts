export type MenuOptions = {
  label: string;
  onClick: () => void;
};

export type HeaderProps = {
  menuOptions: MenuOptions[];
};
