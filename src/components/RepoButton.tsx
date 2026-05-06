type RepoButtonProps = {
  url: string
}

export function RepoButton({ url }: RepoButtonProps) {
  return (
    <a className="repo-button" href={url} target="_blank" rel="noreferrer">
      Ver repositorio
    </a>
  )
}