import Image from 'next/image'

export function useMDXComponents(components) {
  return {
    h1: ({ children, className, ...props }) => (
      <h1 className={`text-2xl font-bold mb-6 ${className}`} {...props}>{children}</h1>
    ),
    h2: ({ children, className, ...props }) => (
      <h2 className={`text-xl font-semibold my-4 pb-2 border-b border-gray-200 ${className}`} {...props}>{children}</h2>
    ),
    ul: ({ children, className, ...props }) => (
      <ul className={`list-disc pl-6 space-y-2 ${className}`} {...props}>{children}</ul>
    ),
    p: ({ children, className, ...props }) => (
        <p className={`my-4 ${className}`} {...props}>{children}</p>
    ),
    a: ({ children, href, className, ...props }) => (
      <a href={href} className={`hover:border-b-2 hover:border-orange-500 ${className}`} target="_blank" {...props}>{children}</a>
    ),
    img: (props) => (
      <Image
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
        {...props}
      />
    ),
    ...components,
  }
}