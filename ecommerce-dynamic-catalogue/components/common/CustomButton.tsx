interface ButtonProps {
  children: React.ReactNode
  buttonBackgroundColor?: 'black' | 'green' | 'white'
  buttonStyles: string
}

const Button = ({ children, buttonBackgroundColor, buttonStyles }: ButtonProps) => {
  const backgroundColorClass = buttonBackgroundColor
    ? {
        black: 'bg-[#151117]',
        green: 'bg-[#34967c]',
        white: 'bg-[#ffffff]',
      }[buttonBackgroundColor]
    : 'bg-slate-500'

  return (
    <button
      className={`${backgroundColorClass} ${buttonStyles} font-quicksand text-sm rounded-full`}
    >
      {children}
    </button>
  )
}

export default Button
