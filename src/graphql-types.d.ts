/* tslint:disable */

export interface RootQueryType {
  file: File | null;
  imageSharp: ImageSharp | null;
  author: Author | null;
  markdownRemark: MarkdownRemark | null;
  allFile: FileConnection | null;
  allImageSharp: ImageSharpConnection | null;
  allAuthor: AuthorConnection | null;
  allMarkdownRemark: MarkdownRemarkConnection | null;
  site: Site | null;
}

export interface FileRootQueryTypeArgs {
  id: fileIdQueryString | null;
  contentDigest: fileContentDigestQueryString | null;
  mediaType: fileMediaTypeQueryString | null;
  type: fileTypeQueryString | null;
  sourceName: fileSourceNameQueryString | null;
  absolutePath: fileAbsolutePathQueryString | null;
  relativePath: fileRelativePathQueryString | null;
  extension: fileExtensionQueryString | null;
  size: fileSizeQueryNumber | null;
  prettySize: filePrettySizeQueryString | null;
  modifiedTime: fileModifiedTimeQueryString | null;
  accessTime: fileAccessTimeQueryString | null;
  changeTime: fileChangeTimeQueryString | null;
  birthTime: fileBirthTimeQueryString | null;
  root: fileRootQueryString | null;
  dir: fileDirQueryString | null;
  base: fileBaseQueryString | null;
  ext: fileExtQueryString | null;
  name: fileNameQueryString | null;
  dev: fileDevQueryNumber | null;
  mode: fileModeQueryNumber | null;
  nlink: fileNlinkQueryNumber | null;
  uid: fileUidQueryNumber | null;
  gid: fileGidQueryNumber | null;
  rdev: fileRdevQueryNumber | null;
  ino: fileInoQueryNumber | null;
  atime: fileAtimeQueryString | null;
  mtime: fileMtimeQueryString | null;
  ctime: fileCtimeQueryString | null;
  birthtime: fileBirthtimeQueryString | null;
  pluginName: filePluginNameQueryString | null;
  sortBy: fileSortBy | null;
}

export interface ImageSharpRootQueryTypeArgs {
  logical: imageSharpLogicalQueryBoolean | null;
  id: imageSharpIdQueryString | null;
  contentDigest: imageSharpContentDigestQueryString | null;
  type: imageSharpTypeQueryString | null;
  mediaType: imageSharpMediaTypeQueryString | null;
  pluginName: imageSharpPluginNameQueryString | null;
  sortBy: imageSharpSortBy | null;
}

export interface AuthorRootQueryTypeArgs {
  id: authorIdQueryString | null;
  bio: authorBioQueryString | null;
  avatar: authorAvatarQueryString | null;
  twitter: authorTwitterQueryString | null;
  github: authorGithubQueryString | null;
  contentDigest: authorContentDigestQueryString | null;
  mediaType: authorMediaTypeQueryString | null;
  type: authorTypeQueryString | null;
  content: authorContentQueryString | null;
  pluginName: authorPluginNameQueryString | null;
  sortBy: authorSortBy | null;
}

export interface MarkdownRemarkRootQueryTypeArgs {
  id: markdownRemarkIdQueryString | null;
  contentDigest: markdownRemarkContentDigestQueryString | null;
  type: markdownRemarkTypeQueryString | null;
  mediaType: markdownRemarkMediaTypeQueryString | null;
  content: markdownRemarkContentQueryString | null;
  frontmatter: markdownRemarkFrontmatterInputObject | null;
  fileAbsolutePath: markdownRemarkFileAbsolutePathQueryString | null;
  pluginName: markdownRemarkPluginNameQueryString | null;
  fields: {
    slug: markdownRemarkSlugQueryString | null;
  }
  sortBy: markdownRemarkSortBy | null;
}

export interface AllFileRootQueryTypeArgs {
  skip: number | null;
  limit: number | null;
  id: fileConnectionIdQueryString | null;
  contentDigest: fileConnectionContentDigestQueryString | null;
  mediaType: fileConnectionMediaTypeQueryString | null;
  type: fileConnectionTypeQueryString | null;
  sourceName: fileConnectionSourceNameQueryString | null;
  absolutePath: fileConnectionAbsolutePathQueryString | null;
  relativePath: fileConnectionRelativePathQueryString | null;
  extension: fileConnectionExtensionQueryString | null;
  size: fileConnectionSizeQueryNumber | null;
  prettySize: fileConnectionPrettySizeQueryString | null;
  modifiedTime: fileConnectionModifiedTimeQueryString | null;
  accessTime: fileConnectionAccessTimeQueryString | null;
  changeTime: fileConnectionChangeTimeQueryString | null;
  birthTime: fileConnectionBirthTimeQueryString | null;
  root: fileConnectionRootQueryString | null;
  dir: fileConnectionDirQueryString | null;
  base: fileConnectionBaseQueryString | null;
  ext: fileConnectionExtQueryString | null;
  name: fileConnectionNameQueryString | null;
  dev: fileConnectionDevQueryNumber | null;
  mode: fileConnectionModeQueryNumber | null;
  nlink: fileConnectionNlinkQueryNumber | null;
  uid: fileConnectionUidQueryNumber | null;
  gid: fileConnectionGidQueryNumber | null;
  rdev: fileConnectionRdevQueryNumber | null;
  ino: fileConnectionInoQueryNumber | null;
  atime: fileConnectionAtimeQueryString | null;
  mtime: fileConnectionMtimeQueryString | null;
  ctime: fileConnectionCtimeQueryString | null;
  birthtime: fileConnectionBirthtimeQueryString | null;
  pluginName: fileConnectionPluginNameQueryString | null;
  sortBy: fileConnectionSortBy | null;
}

export interface AllImageSharpRootQueryTypeArgs {
  skip: number | null;
  limit: number | null;
  logical: imageSharpConnectionLogicalQueryBoolean | null;
  id: imageSharpConnectionIdQueryString | null;
  contentDigest: imageSharpConnectionContentDigestQueryString | null;
  type: imageSharpConnectionTypeQueryString | null;
  mediaType: imageSharpConnectionMediaTypeQueryString | null;
  pluginName: imageSharpConnectionPluginNameQueryString | null;
  sortBy: imageSharpConnectionSortBy | null;
}

export interface AllAuthorRootQueryTypeArgs {
  skip: number | null;
  limit: number | null;
  id: authorConnectionIdQueryString | null;
  bio: authorConnectionBioQueryString | null;
  avatar: authorConnectionAvatarQueryString | null;
  twitter: authorConnectionTwitterQueryString | null;
  github: authorConnectionGithubQueryString | null;
  contentDigest: authorConnectionContentDigestQueryString | null;
  mediaType: authorConnectionMediaTypeQueryString | null;
  type: authorConnectionTypeQueryString | null;
  content: authorConnectionContentQueryString | null;
  pluginName: authorConnectionPluginNameQueryString | null;
  sortBy: authorConnectionSortBy | null;
}

export interface AllMarkdownRemarkRootQueryTypeArgs {
  skip: number | null;
  limit: number | null;
  id: markdownRemarkConnectionIdQueryString | null;
  contentDigest: markdownRemarkConnectionContentDigestQueryString | null;
  type: markdownRemarkConnectionTypeQueryString | null;
  mediaType: markdownRemarkConnectionMediaTypeQueryString | null;
  content: markdownRemarkConnectionContentQueryString | null;
  frontmatter: markdownRemarkConnectionFrontmatterInputObject | null;
  fileAbsolutePath: markdownRemarkConnectionFileAbsolutePathQueryString | null;
  pluginName: markdownRemarkConnectionPluginNameQueryString | null;
  fields: {
    slug: markdownRemarkConnectionSlugQueryString | null;
  }
  sortBy: markdownRemarkConnectionSortBy | null;
}

export interface fileIdQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileContentDigestQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileMediaTypeQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileTypeQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileSourceNameQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileAbsolutePathQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileRelativePathQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileExtensionQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileSizeQueryNumber {
  eq: number | null;
  ne: number | null;
}

export interface filePrettySizeQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileModifiedTimeQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileAccessTimeQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileChangeTimeQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileBirthTimeQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileRootQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileDirQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileBaseQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileExtQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileNameQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileDevQueryNumber {
  eq: number | null;
  ne: number | null;
}

export interface fileModeQueryNumber {
  eq: number | null;
  ne: number | null;
}

export interface fileNlinkQueryNumber {
  eq: number | null;
  ne: number | null;
}

export interface fileUidQueryNumber {
  eq: number | null;
  ne: number | null;
}

export interface fileGidQueryNumber {
  eq: number | null;
  ne: number | null;
}

export interface fileRdevQueryNumber {
  eq: number | null;
  ne: number | null;
}

export interface fileInoQueryNumber {
  eq: number | null;
  ne: number | null;
}

export interface fileAtimeQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileMtimeQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileCtimeQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileBirthtimeQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface filePluginNameQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileSortBy {
  fields: Array<FileSortByFieldsEnum>;
  order: fileSortOrderValues | null;
}

export type FileSortByFieldsEnum = "id" | "contentDigest" | "mediaType" | "type" | "sourceName" | "absolutePath" | "relativePath" | "extension" | "size" | "prettySize" | "modifiedTime" | "accessTime" | "changeTime" | "birthTime" | "root" | "dir" | "base" | "ext" | "name" | "dev" | "mode" | "nlink" | "uid" | "gid" | "rdev" | "ino" | "atime" | "mtime" | "ctime" | "birthtime" | "pluginName";

export type fileSortOrderValues = "ASC" | "DESC";

export interface File extends Node {
  id: string;
  type: string | null;
  parent: Node | null;
  children: Array<Node> | null;
  contentDigest: string | null;
  mediaType: string | null;
  sourceName: string | null;
  absolutePath: string | null;
  relativePath: string | null;
  extension: string | null;
  size: number | null;
  prettySize: string | null;
  modifiedTime: string | null;
  accessTime: string | null;
  changeTime: string | null;
  birthTime: string | null;
  root: string | null;
  dir: string | null;
  base: string | null;
  ext: string | null;
  name: string | null;
  dev: number | null;
  mode: number | null;
  nlink: number | null;
  uid: number | null;
  gid: number | null;
  rdev: number | null;
  ino: number | null;
  atime: string | null;
  mtime: string | null;
  ctime: string | null;
  birthtime: string | null;
  pluginName: string | null;
}

export interface ModifiedTimeFileArgs {
  formatString: string | null;
  fromNow: boolean | null;
  difference: string | null;
}

export interface AccessTimeFileArgs {
  formatString: string | null;
  fromNow: boolean | null;
  difference: string | null;
}

export interface ChangeTimeFileArgs {
  formatString: string | null;
  fromNow: boolean | null;
  difference: string | null;
}

export interface BirthTimeFileArgs {
  formatString: string | null;
  fromNow: boolean | null;
  difference: string | null;
}

export interface AtimeFileArgs {
  formatString: string | null;
  fromNow: boolean | null;
  difference: string | null;
}

export interface MtimeFileArgs {
  formatString: string | null;
  fromNow: boolean | null;
  difference: string | null;
}

export interface CtimeFileArgs {
  formatString: string | null;
  fromNow: boolean | null;
  difference: string | null;
}

export interface BirthtimeFileArgs {
  formatString: string | null;
  fromNow: boolean | null;
  difference: string | null;
}

export interface Node {
  id: string;
  parent: Node | null;
  children: Array<Node> | null;
}

export interface imageSharpLogicalQueryBoolean {
  eq: boolean | null;
  ne: boolean | null;
}

export interface imageSharpIdQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface imageSharpContentDigestQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface imageSharpTypeQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface imageSharpMediaTypeQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface imageSharpPluginNameQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface imageSharpSortBy {
  fields: Array<ImageSharpSortByFieldsEnum>;
  order: imageSharpSortOrderValues | null;
}

export type ImageSharpSortByFieldsEnum = "logical" | "id" | "contentDigest" | "type" | "mediaType" | "pluginName";

export type imageSharpSortOrderValues = "ASC" | "DESC";

export interface ImageSharp extends Node {
  id: string;
  type: string | null;
  parent: Node | null;
  children: Array<Node> | null;
  logical: boolean | null;
  contentDigest: string | null;
  mediaType: File | null;
  pluginName: string | null;
  responsiveResolution: ImageSharpResponsiveResolution | null;
  responsiveSizes: ImageSharpResponsiveSizes | null;
  resize: ImageSharpResize | null;
}

export interface ResponsiveResolutionImageSharpArgs {
  width: number | null;
  height: number | null;
  grayscale: boolean | null;
  quality: number | null;
}

export interface ResponsiveSizesImageSharpArgs {
  maxWidth: number | null;
  maxHeight: number | null;
  grayscale: boolean | null;
  quality: number | null;
}

export interface ResizeImageSharpArgs {
  width: number | null;
  height: number | null;
  quality: number | null;
  jpegProgressive: boolean | null;
  pngCompressionLevel: number | null;
  grayscale: boolean | null;
  base64: boolean | null;
}

export interface ImageSharpResponsiveResolution {
  base64: string | null;
  aspectRatio: number | null;
  width: number | null;
  height: number | null;
  src: string | null;
  srcSet: string | null;
}

export interface ImageSharpResponsiveSizes {
  base64: string | null;
  aspectRatio: number | null;
  src: string | null;
  srcSet: string | null;
}

export interface ImageSharpResize {
  src: string | null;
  width: number | null;
  height: number | null;
  aspectRatio: number | null;
}

export interface authorIdQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface authorBioQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface authorAvatarQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface authorTwitterQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface authorGithubQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface authorContentDigestQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface authorMediaTypeQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface authorTypeQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface authorContentQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface authorPluginNameQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface authorSortBy {
  fields: Array<AuthorSortByFieldsEnum>;
  order: authorSortOrderValues | null;
}

export type AuthorSortByFieldsEnum = "id" | "bio" | "avatar" | "twitter" | "github" | "contentDigest" | "mediaType" | "type" | "content" | "pluginName";

export type authorSortOrderValues = "ASC" | "DESC";

export interface Author extends Node {
  id: string;
  type: string | null;
  parent: Node | null;
  children: Array<Node> | null;
  bio: string | null;
  avatar: File | null;
  twitter: string | null;
  github: string | null;
  contentDigest: string | null;
  mediaType: File | null;
  content: string | null;
  pluginName: string | null;
}

export interface markdownRemarkIdQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface markdownRemarkContentDigestQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface markdownRemarkTypeQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface markdownRemarkMediaTypeQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface markdownRemarkContentQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface markdownRemarkFrontmatterInputObject {
  title: markdownRemarkFrontmatterTitleQueryString | null;
  date: markdownRemarkFrontmatterDateQueryString | null;
  updatedDate: markdownRemarkFrontmatterUpdatedDateQueryString | null;
  createdDate: markdownRemarkFrontmatterCreatedDateQueryString | null;
  author: markdownRemarkFrontmatterAuthorQueryString | null;
  icon: markdownRemarkFrontmatterIconQueryString | null;
  tags: markdownRemarkFrontmatterTagsQueryList | null;
  image: markdownRemarkFrontmatterImageQueryString | null;
  draft: markdownRemarkFrontmatterDraftQueryBoolean | null;
}

export interface markdownRemarkFrontmatterTitleQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface markdownRemarkFrontmatterDateQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface markdownRemarkFrontmatterUpdatedDateQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface markdownRemarkFrontmatterCreatedDateQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface markdownRemarkFrontmatterAuthorQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface markdownRemarkFrontmatterIconQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface markdownRemarkFrontmatterTagsQueryList {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
}

export interface markdownRemarkFrontmatterImageQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface markdownRemarkFrontmatterDraftQueryBoolean {
  eq: boolean | null;
  ne: boolean | null;
}

export interface markdownRemarkFileAbsolutePathQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface markdownRemarkPluginNameQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface markdownRemarkSlugQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface markdownRemarkSortBy {
  fields: Array<MarkdownRemarkSortByFieldsEnum>;
  order: markdownRemarkSortOrderValues | null;
}

export type MarkdownRemarkSortByFieldsEnum = "id" | "contentDigest" | "type" | "mediaType" | "content" | "frontmatter___title" | "frontmatter___date" | "frontmatter___updatedDate" | "frontmatter___createdDate" | "frontmatter___author" | "frontmatter___icon" | "frontmatter___tags" | "frontmatter___image" | "frontmatter___draft" | "frontmatter___parent" | "fileAbsolutePath" | "pluginName" | "slug";

export type markdownRemarkSortOrderValues = "ASC" | "DESC";

export interface MarkdownRemark extends Node {
  id: string;
  type: string | null;
  parent: Node | null;
  children: Array<Node> | null;
  contentDigest: string | null;
  mediaType: string | null;
  content: string | null;
  frontmatter: frontmatter | null;
  fileAbsolutePath: File | null;
  pluginName: string | null;
  fields: {
    slug: string | null;
  }
  html: string | null;
  excerpt: string | null;
  headings: Array<MarkdownHeading> | null;
  timeToRead: number | null;
}

export interface ExcerptMarkdownRemarkArgs {
  pruneLength: number | null;
}

export interface HeadingsMarkdownRemarkArgs {
  depth: HeadingLevels | null;
}

export interface frontmatter {
  title: string | null;
  date: string | null;
  updatedDate: string | null;
  createdDate: string | null;
  author: Author | null;
  icon: string | null;
  tags: Array<string> | null;
  image: File | null;
  draft: boolean | null;
  parent: string | null;
}

export interface DatefrontmatterArgs {
  formatString: string | null;
  fromNow: boolean | null;
  difference: string | null;
}

export interface UpdatedDatefrontmatterArgs {
  formatString: string | null;
  fromNow: boolean | null;
  difference: string | null;
}

export interface CreatedDatefrontmatterArgs {
  formatString: string | null;
  fromNow: boolean | null;
  difference: string | null;
}

export type HeadingLevels = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export interface MarkdownHeading {
  value: string | null;
  depth: number | null;
}

export interface fileConnectionIdQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileConnectionContentDigestQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileConnectionMediaTypeQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileConnectionTypeQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileConnectionSourceNameQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileConnectionAbsolutePathQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileConnectionRelativePathQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileConnectionExtensionQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileConnectionSizeQueryNumber {
  eq: number | null;
  ne: number | null;
}

export interface fileConnectionPrettySizeQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileConnectionModifiedTimeQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileConnectionAccessTimeQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileConnectionChangeTimeQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileConnectionBirthTimeQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileConnectionRootQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileConnectionDirQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileConnectionBaseQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileConnectionExtQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileConnectionNameQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileConnectionDevQueryNumber {
  eq: number | null;
  ne: number | null;
}

export interface fileConnectionModeQueryNumber {
  eq: number | null;
  ne: number | null;
}

export interface fileConnectionNlinkQueryNumber {
  eq: number | null;
  ne: number | null;
}

export interface fileConnectionUidQueryNumber {
  eq: number | null;
  ne: number | null;
}

export interface fileConnectionGidQueryNumber {
  eq: number | null;
  ne: number | null;
}

export interface fileConnectionRdevQueryNumber {
  eq: number | null;
  ne: number | null;
}

export interface fileConnectionInoQueryNumber {
  eq: number | null;
  ne: number | null;
}

export interface fileConnectionAtimeQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileConnectionMtimeQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileConnectionCtimeQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileConnectionBirthtimeQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileConnectionPluginNameQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileConnectionSortBy {
  fields: Array<FileConnectionSortByFieldsEnum>;
  order: fileConnectionSortOrderValues | null;
}

export type FileConnectionSortByFieldsEnum = "id" | "contentDigest" | "mediaType" | "type" | "sourceName" | "absolutePath" | "relativePath" | "extension" | "size" | "prettySize" | "modifiedTime" | "accessTime" | "changeTime" | "birthTime" | "root" | "dir" | "base" | "ext" | "name" | "dev" | "mode" | "nlink" | "uid" | "gid" | "rdev" | "ino" | "atime" | "mtime" | "ctime" | "birthtime" | "pluginName";

export type fileConnectionSortOrderValues = "ASC" | "DESC";

export interface FileConnection {
  pageInfo: PageInfo;
  edges: Array<FileEdge> | null;
  totalCount: number | null;
  distinct: Array<string> | null;
  groupBy: Array<fileGroupConnectionConnection> | null;
}

export interface DistinctFileConnectionArgs {
  field: fileDistinctEnum | null;
}

export interface GroupByFileConnectionArgs {
  skip: number | null;
  limit: number | null;
  field: fileGroupByEnum | null;
}

export interface PageInfo {
  hasNextPage: boolean;
}

export interface FileEdge {
  node: File | null;
  next: File | null;
  previous: File | null;
}

export type fileDistinctEnum = "id" | "contentDigest" | "mediaType" | "type" | "sourceName" | "absolutePath" | "relativePath" | "extension" | "size" | "prettySize" | "modifiedTime" | "accessTime" | "changeTime" | "birthTime" | "root" | "dir" | "base" | "ext" | "name" | "dev" | "mode" | "nlink" | "uid" | "gid" | "rdev" | "ino" | "atime" | "mtime" | "ctime" | "birthtime" | "pluginName";

export type fileGroupByEnum = "id" | "contentDigest" | "mediaType" | "type" | "sourceName" | "absolutePath" | "relativePath" | "extension" | "size" | "prettySize" | "modifiedTime" | "accessTime" | "changeTime" | "birthTime" | "root" | "dir" | "base" | "ext" | "name" | "dev" | "mode" | "nlink" | "uid" | "gid" | "rdev" | "ino" | "atime" | "mtime" | "ctime" | "birthtime" | "pluginName";

export interface fileGroupConnectionConnection {
  pageInfo: PageInfo;
  edges: Array<fileGroupConnectionEdge> | null;
  field: string | null;
  fieldValue: string | null;
  totalCount: number | null;
}

export interface fileGroupConnectionEdge {
  node: File | null;
  next: File | null;
  previous: File | null;
}

export interface imageSharpConnectionLogicalQueryBoolean {
  eq: boolean | null;
  ne: boolean | null;
}

export interface imageSharpConnectionIdQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface imageSharpConnectionContentDigestQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface imageSharpConnectionTypeQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface imageSharpConnectionMediaTypeQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface imageSharpConnectionPluginNameQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface imageSharpConnectionSortBy {
  fields: Array<ImageSharpConnectionSortByFieldsEnum>;
  order: imageSharpConnectionSortOrderValues | null;
}

export type ImageSharpConnectionSortByFieldsEnum = "logical" | "id" | "contentDigest" | "type" | "mediaType" | "pluginName";

export type imageSharpConnectionSortOrderValues = "ASC" | "DESC";

export interface ImageSharpConnection {
  pageInfo: PageInfo;
  edges: Array<ImageSharpEdge> | null;
  totalCount: number | null;
  distinct: Array<string> | null;
  groupBy: Array<imageSharpGroupConnectionConnection> | null;
}

export interface DistinctImageSharpConnectionArgs {
  field: imageSharpDistinctEnum | null;
}

export interface GroupByImageSharpConnectionArgs {
  skip: number | null;
  limit: number | null;
  field: imageSharpGroupByEnum | null;
}

export interface ImageSharpEdge {
  node: ImageSharp | null;
  next: ImageSharp | null;
  previous: ImageSharp | null;
}

export type imageSharpDistinctEnum = "logical" | "id" | "contentDigest" | "type" | "mediaType" | "pluginName";

export type imageSharpGroupByEnum = "logical" | "id" | "contentDigest" | "type" | "mediaType" | "pluginName";

export interface imageSharpGroupConnectionConnection {
  pageInfo: PageInfo;
  edges: Array<imageSharpGroupConnectionEdge> | null;
  field: string | null;
  fieldValue: string | null;
  totalCount: number | null;
}

export interface imageSharpGroupConnectionEdge {
  node: ImageSharp | null;
  next: ImageSharp | null;
  previous: ImageSharp | null;
}

export interface authorConnectionIdQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface authorConnectionBioQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface authorConnectionAvatarQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface authorConnectionTwitterQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface authorConnectionGithubQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface authorConnectionContentDigestQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface authorConnectionMediaTypeQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface authorConnectionTypeQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface authorConnectionContentQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface authorConnectionPluginNameQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface authorConnectionSortBy {
  fields: Array<AuthorConnectionSortByFieldsEnum>;
  order: authorConnectionSortOrderValues | null;
}

export type AuthorConnectionSortByFieldsEnum = "id" | "bio" | "avatar" | "twitter" | "github" | "contentDigest" | "mediaType" | "type" | "content" | "pluginName";

export type authorConnectionSortOrderValues = "ASC" | "DESC";

export interface AuthorConnection {
  pageInfo: PageInfo;
  edges: Array<AuthorEdge> | null;
  totalCount: number | null;
  distinct: Array<string> | null;
  groupBy: Array<authorGroupConnectionConnection> | null;
}

export interface DistinctAuthorConnectionArgs {
  field: authorDistinctEnum | null;
}

export interface GroupByAuthorConnectionArgs {
  skip: number | null;
  limit: number | null;
  field: authorGroupByEnum | null;
}

export interface AuthorEdge {
  node: Author | null;
  next: Author | null;
  previous: Author | null;
}

export type authorDistinctEnum = "id" | "bio" | "avatar" | "twitter" | "github" | "contentDigest" | "mediaType" | "type" | "content" | "pluginName";

export type authorGroupByEnum = "id" | "bio" | "avatar" | "twitter" | "github" | "contentDigest" | "mediaType" | "type" | "content" | "pluginName";

export interface authorGroupConnectionConnection {
  pageInfo: PageInfo;
  edges: Array<authorGroupConnectionEdge> | null;
  field: string | null;
  fieldValue: string | null;
  totalCount: number | null;
}

export interface authorGroupConnectionEdge {
  node: Author | null;
  next: Author | null;
  previous: Author | null;
}

export interface markdownRemarkConnectionIdQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface markdownRemarkConnectionContentDigestQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface markdownRemarkConnectionTypeQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface markdownRemarkConnectionMediaTypeQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface markdownRemarkConnectionContentQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface markdownRemarkConnectionFrontmatterInputObject {
  title: markdownRemarkConnectionFrontmatterTitleQueryString | null;
  date: markdownRemarkConnectionFrontmatterDateQueryString | null;
  updatedDate: markdownRemarkConnectionFrontmatterUpdatedDateQueryString | null;
  createdDate: markdownRemarkConnectionFrontmatterCreatedDateQueryString | null;
  author: markdownRemarkConnectionFrontmatterAuthorQueryString | null;
  icon: markdownRemarkConnectionFrontmatterIconQueryString | null;
  tags: markdownRemarkConnectionFrontmatterTagsQueryList | null;
  image: markdownRemarkConnectionFrontmatterImageQueryString | null;
  draft: markdownRemarkConnectionFrontmatterDraftQueryBoolean | null;
}

export interface markdownRemarkConnectionFrontmatterTitleQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface markdownRemarkConnectionFrontmatterDateQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface markdownRemarkConnectionFrontmatterUpdatedDateQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface markdownRemarkConnectionFrontmatterCreatedDateQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface markdownRemarkConnectionFrontmatterAuthorQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface markdownRemarkConnectionFrontmatterIconQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface markdownRemarkConnectionFrontmatterTagsQueryList {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
}

export interface markdownRemarkConnectionFrontmatterImageQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface markdownRemarkConnectionFrontmatterDraftQueryBoolean {
  eq: boolean | null;
  ne: boolean | null;
}

export interface markdownRemarkConnectionFileAbsolutePathQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface markdownRemarkConnectionPluginNameQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface markdownRemarkConnectionSlugQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface markdownRemarkConnectionSortBy {
  fields: Array<MarkdownRemarkConnectionSortByFieldsEnum>;
  order: markdownRemarkConnectionSortOrderValues | null;
}

export type MarkdownRemarkConnectionSortByFieldsEnum = "id" | "contentDigest" | "type" | "mediaType" | "content" | "frontmatter___title" | "frontmatter___date" | "frontmatter___updatedDate" | "frontmatter___createdDate" | "frontmatter___author" | "frontmatter___icon" | "frontmatter___tags" | "frontmatter___image" | "frontmatter___draft" | "frontmatter___parent" | "fileAbsolutePath" | "pluginName" | "slug";

export type markdownRemarkConnectionSortOrderValues = "ASC" | "DESC";

export interface MarkdownRemarkConnection {
  pageInfo: PageInfo;
  edges: Array<MarkdownRemarkEdge> | null;
  totalCount: number | null;
  distinct: Array<string> | null;
  groupBy: Array<markdownRemarkGroupConnectionConnection> | null;
}

export interface DistinctMarkdownRemarkConnectionArgs {
  field: markdownRemarkDistinctEnum | null;
}

export interface GroupByMarkdownRemarkConnectionArgs {
  skip: number | null;
  limit: number | null;
  field: markdownRemarkGroupByEnum | null;
}

export interface MarkdownRemarkEdge {
  node: MarkdownRemark | null;
  next: MarkdownRemark | null;
  previous: MarkdownRemark | null;
}

export type markdownRemarkDistinctEnum = "id" | "contentDigest" | "type" | "mediaType" | "content" | "frontmatter___title" | "frontmatter___date" | "frontmatter___updatedDate" | "frontmatter___createdDate" | "frontmatter___author" | "frontmatter___icon" | "frontmatter___tags" | "frontmatter___image" | "frontmatter___draft" | "frontmatter___parent" | "fileAbsolutePath" | "pluginName" | "slug";

export type markdownRemarkGroupByEnum = "id" | "contentDigest" | "type" | "mediaType" | "content" | "frontmatter___title" | "frontmatter___date" | "frontmatter___updatedDate" | "frontmatter___createdDate" | "frontmatter___author" | "frontmatter___icon" | "frontmatter___tags" | "frontmatter___image" | "frontmatter___draft" | "frontmatter___parent" | "fileAbsolutePath" | "pluginName" | "slug";

export interface markdownRemarkGroupConnectionConnection {
  pageInfo: PageInfo;
  edges: Array<markdownRemarkGroupConnectionEdge> | null;
  field: string | null;
  fieldValue: string | null;
  totalCount: number | null;
}

export interface markdownRemarkGroupConnectionEdge {
  node: MarkdownRemark | null;
  next: MarkdownRemark | null;
  previous: MarkdownRemark | null;
}

export interface Site {
  siteMetadata: SiteMetadata | null;
  development: DevelopmentConfig | null;
  linkPrefix: string | null;
  buildTime: string | null;
}

export interface SiteMetadata {
  title: string | null;
}

export interface DevelopmentConfig {
  port: string | null;
}
