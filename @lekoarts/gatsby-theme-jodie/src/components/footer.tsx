/** @jsx jsx */
import { jsx, Link, useThemeUI } from "theme-ui"
import { readableColor } from "polished"
import useSiteMetadata from "../hooks/use-site-metadata"

const Footer = ({ bg }: { bg: string }) => {
  const { siteTitle } = useSiteMetadata()
  const {
    theme: { rawColors },
  } = useThemeUI()

  const text = readableColor(
    bg,
    rawColors!.textMuted as string | undefined,
    rawColors!.textMutedLight as string | undefined
  )

  return (
    <footer
      sx={{
        position: [`relative`, `relative`, `relative`, `fixed`],
        width: (t: any): any => [`100%`, `100%`, `100%`, t.sidebar.normal, t.sidebar.wide],
        bottom: 0,
        color: text,
        fontSize: 0,
        p: [3, 3, 4],
        background: bg,
        a: {
          color: readableColor(bg),
          "&:hover,&:focus": {
            color: readableColor(bg, `primary`, `primaryLight`, false),
          },
        },
        variant: `footer`,
      }}
    >
      <div>
        &copy; {new Date().getFullYear()} by {siteTitle}.
      </div>
      <div>
      Get in touch !{` `}  
        <Link
          aria-label="Link to Instagram"
          href="https://www.instagram.com/label_sneha_priya/"
        >
          Instagram
        </Link>
        {` `}
        ,
        {` `}
        <Link
          aria-label="Link to Facebook"
          href="https://www.facebook.com/TeamDesiGleam"
        >
          Facebook !
        </Link>
      </div>
    </footer>
  )
}

export default Footer
