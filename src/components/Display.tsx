type DisplayProps = {
  value: string
}

export function Display({ value }: DisplayProps) {
  return <div aria-label="Resultado" aria-live="polite" className="display" role="status">{value}</div>
}
