import { cn } from '@lib/utils';
import { type InputHTMLAttributes } from 'react'
// className='border-1 block h-12 w-full rounded-md border border-double border-slate-800 border-transparent bg-[linear-gradient(#000,#000),linear-gradient(to_right,#334454,#334454)]	bg-origin-border px-3 py-2 text-slate-200 transition-all duration-500 [background-clip:padding-box,_border-box] placeholder:text-slate-500 focus:bg-[linear-gradient(#000,#000),linear-gradient(to_right,#c7d2fe,#8678f9)] focus:outline-none'
const VARIANTS = {
  // primary: 'w-full appearance-none rounded-md dark:text-white/80 bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-indigo-900 dark:focus:border-indigo-800 focus:border-indigo-400 focus:shadow-indigo-800/20 shadow-indigo-700 focus:shadow-lg outline-none px-3 py-2 focus:bg-indigo-50/40 dark:focus:bg-neutral-950 duration-200',
  primary: 'appearance-none h-[56px] px-4 py-2 block w-full rounded-[6px] border focus:outline-none border-[#E5E9F2] p-18 12 18 12 gap-8 flex items-center',
  card: 'w-full app:text-black/ p-2 rounded-md bg-slate-50 focus:shadow-black/20 placeholder-gray-400'
}

type InputVariant = keyof typeof VARIANTS

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: InputVariant
}

export function Input({ className = '', variant = 'primary', ...props }: InputProps) {
  if (props.type === 'checkbox') {
    return (
      <label className='flex flex-wrap-reverse items-center'>
        <div className='flex'>
          <input className={cn(className ?? 'peer duration-200 rounded-md w-0 h-0 relative after:absolute after:top-0 after:left-0 after:w-7 after:h-7 checked:after:bg-white after:z-0 after:rounded-md after:bg-white after:border after:border-white after:shadow-lg after:shadow-white/20 after:duration-200')}
            {...props} />
          <span className='z-[1] font-semibold h-fit'>
            <svg className='text-white w-7 h-7' height="21" viewBox="0 0 21 21" width="21"><path d="m.5 5.5 3 3 8.028-8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" transform="translate(5 6)" /></svg>
          </span>
        </div>
        {/* {Boolean(error?.message) && <span className='text-black/70 w-fit font-medium bg-red-50'>{error?.message}</span>} */}
      </label>
    )
  }
  if (props.type === 'range') {
    return (
      <input className={cn(className)}
      {...props} />
      )
    }
    return (
    <div className={cn(VARIANTS[variant])}>
      <input className={"text-base leading-5 tracking-[1%] placeholder-gray-400 m-[8px] w-full focus:outline-none"}
        {...props} />
    </div>
  )
}