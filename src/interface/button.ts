export interface IButton
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: "submit" | "reset" | "button" | undefined;
  children: React.ReactNode;
}
