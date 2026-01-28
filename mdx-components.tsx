import type { MDXComponents } from 'mdx/types'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import Link from '@mui/material/Link'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { BsCodeSlash } from 'react-icons/bs'
import { RiSlideshow3Fill } from 'react-icons/ri'
import { createSvgIcon } from 'components/Icons/createSvgIcon'

// Import SVG assets
// import ReactSvg from 'assets/react.svg'
// import NextSvg from 'assets/next.svg'
// import DockerSvg from 'assets/docker.svg'
import TypescriptSvg from 'assets/typescript.svg'
// import GoLangSvg from 'assets/go-logo-blue.svg'
// import TailwindSvg from 'assets/tailwindcss.svg'
// import DeepseekSvg from 'assets/deepseek.svg'
// import PostgresqlSvg from 'assets/postgresql.svg'
// import MaterialUiSvg from 'assets/material-ui.svg'
// import NestSvg from 'assets/nestjs.svg'
// import LambdaSvg from 'assets/lambda.svg'
// import S3Svg from 'assets/s3.svg'
// import PythonSvg from 'assets/python.svg'
// import TauriSvg from 'assets/tauri-24.svg'
// import SassSvg from 'assets/sass.svg'
// import DjangoSvg from 'assets/django.svg'
// import JavascriptSvg from 'assets/javascript.svg'
// import SupabaseSvg from 'assets/supabase.svg'
// import GoFiberSvg from 'assets/gofiber.svg'
// import RustSvg from 'assets/rust-blk-24.svg'

// Create wrapped icon components
// const ReactIcon = createSvgIcon(ReactSvg)
// const NextIcon = createSvgIcon(NextSvg)
// const DockerIcon = createSvgIcon(DockerSvg)
const TypescriptIcon = createSvgIcon(TypescriptSvg)
// const GoLangIcon = createSvgIcon(GoLangSvg)
// const TailwindIcon = createSvgIcon(TailwindSvg)
// const DeepseekIcon = createSvgIcon(DeepseekSvg)
// const PostgresqlIcon = createSvgIcon(PostgresqlSvg)
// const MaterialUiIcon = createSvgIcon(MaterialUiSvg)
// const NestIcon = createSvgIcon(NestSvg)
// const LambdaIcon = createSvgIcon(LambdaSvg)
// const S3Icon = createSvgIcon(S3Svg)
// const PythonIcon = createSvgIcon(PythonSvg)
// const TauriIcon = createSvgIcon(TauriSvg)
// const SassIcon = createSvgIcon(SassSvg)
// const DjangoIcon = createSvgIcon(DjangoSvg)
// const JavascriptIcon = createSvgIcon(JavascriptSvg)
// const SupabaseIcon = createSvgIcon(SupabaseSvg)
// const GoFiberIcon = createSvgIcon(GoFiberSvg)
// const RustIcon = createSvgIcon(RustSvg)

// This file is required to use MDX in `app` directory.

const components: MDXComponents = {
  IconButton,
  Tooltip,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  // React Icons
  BsCodeSlash,
  RiSlideshow3Fill,
  // SVG Icons
  // ReactIcon,
  // NextIcon,
  // DockerIcon,
  TypescriptIcon,
  TypescriptSvg,
  // GoLangIcon,
  // TailwindIcon,
  // DeepseekIcon,
  // PostgresqlIcon,
  // MaterialUiIcon,
  // NestIcon,
  // LambdaIcon,
  // S3Icon,
  // PythonIcon,
  // TauriIcon,
  // RustIcon,
  // SassIcon,
  // DjangoIcon,
  // JavascriptIcon,
  // SupabaseIcon,
  // GoFiberIcon,
}
export function useMDXComponents(): MDXComponents {
  return {
    ...components,
  }
}