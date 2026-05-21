type RepoButtonProps = {
  url: string
}

export function RepoButton({ url }: RepoButtonProps) {
  return (
    <a aria-label="Ver repositorio del proyecto" className="repo-button" href={url} target="_blank" rel="noreferrer">
      Ver repositorio
    </a>
  )
}
