/* tslint:disable */

export interface RootQueryType {
  allSitePage: SitePageConnection | null;
  allSitePlugin: SitePluginConnection | null;
  allFile: FileConnection | null;
  allImageSharp: ImageSharpConnection | null;
  allMarkdownRemark: MarkdownRemarkConnection | null;
  allAuthorJson: AuthorJsonConnection | null;
  sitePage: SitePage | null;
  sitePlugin: SitePlugin | null;
  site: Site | null;
  file: File | null;
  imageSharp: ImageSharp | null;
  markdownRemark: MarkdownRemark | null;
  authorJson: AuthorJson | null;
}

export interface AllSitePageRootQueryTypeArgs {
  skip: number | null;
  limit: number | null;
  sort: sitePageConnectionSort | null;
  filter: filterSitePage | null;
}

export interface AllSitePluginRootQueryTypeArgs {
  skip: number | null;
  limit: number | null;
  sort: sitePluginConnectionSort | null;
  filter: filterSitePlugin | null;
}

export interface AllFileRootQueryTypeArgs {
  skip: number | null;
  limit: number | null;
  sort: fileConnectionSort | null;
  filter: filterFile | null;
}

export interface AllImageSharpRootQueryTypeArgs {
  skip: number | null;
  limit: number | null;
  sort: imageSharpConnectionSort | null;
  filter: filterImageSharp | null;
}

export interface AllMarkdownRemarkRootQueryTypeArgs {
  skip: number | null;
  limit: number | null;
  sort: markdownRemarkConnectionSort | null;
  filter: filterMarkdownRemark | null;
}

export interface AllAuthorJsonRootQueryTypeArgs {
  skip: number | null;
  limit: number | null;
  sort: authorJsonConnectionSort | null;
  filter: filterAuthorJson | null;
}

export interface SitePageRootQueryTypeArgs {
  component: sitePageComponentQueryString | null;
  path: sitePagePathQueryString_2 | null;
  componentChunkName: sitePageComponentChunkNameQueryString | null;
  layout: sitePageLayoutQueryString | null;
  jsonName: sitePageJsonNameQueryString | null;
  internalComponentName: sitePageInternalComponentNameQueryString | null;
  updatedAt: sitePageUpdatedAtQueryInteger | null;
  context: sitePageContextInputObject | null;
  pluginCreatorId: sitePagePluginCreatorIdQueryString | null;
  componentPath: sitePageComponentPathQueryString | null;
  id: sitePageIdQueryString_2 | null;
  internal: sitePageInternalInputObject_2 | null;
}

export interface SitePluginRootQueryTypeArgs {
  resolve: sitePluginResolveQueryString_2 | null;
  id: sitePluginIdQueryString_2 | null;
  name: sitePluginNameQueryString_2 | null;
  version: sitePluginVersionQueryString_2 | null;
  pluginOptions: sitePluginPluginOptionsInputObject_2 | null;
  pluginFilepath: sitePluginPluginFilepathQueryString_2 | null;
  packageJson: sitePluginPackageJsonInputObject_2 | null;
  internal: sitePluginInternalInputObject_2 | null;
}

export interface SiteRootQueryTypeArgs {
  siteMetadata: siteSiteMetadataInputObject_2 | null;
  port: sitePortQueryString_2 | null;
  host: siteHostQueryString_2 | null;
  mapping: siteMappingInputObject_2 | null;
  pathPrefix: sitePathPrefixQueryString_2 | null;
  polyfill: sitePolyfillQueryBoolean_2 | null;
  buildTime: siteBuildTimeQueryString_2 | null;
  id: siteIdQueryString_2 | null;
  internal: siteInternalInputObject_2 | null;
}

export interface FileRootQueryTypeArgs {
  id: fileIdQueryString_2 | null;
  internal: fileInternalInputObject_2 | null;
  sourceInstanceName: fileSourceInstanceNameQueryString_2 | null;
  absolutePath: fileAbsolutePathQueryString_2 | null;
  relativePath: fileRelativePathQueryString_2 | null;
  extension: fileExtensionQueryString_2 | null;
  size: fileSizeQueryInteger_2 | null;
  prettySize: filePrettySizeQueryString_2 | null;
  modifiedTime: fileModifiedTimeQueryString_2 | null;
  accessTime: fileAccessTimeQueryString_2 | null;
  changeTime: fileChangeTimeQueryString_2 | null;
  birthTime: fileBirthTimeQueryString_2 | null;
  root: fileRootQueryString_2 | null;
  dir: fileDirQueryString_2 | null;
  base: fileBaseQueryString_2 | null;
  ext: fileExtQueryString_2 | null;
  name: fileNameQueryString_2 | null;
  dev: fileDevQueryInteger_2 | null;
  mode: fileModeQueryInteger_2 | null;
  nlink: fileNlinkQueryInteger_2 | null;
  uid: fileUidQueryInteger_2 | null;
  gid: fileGidQueryInteger_2 | null;
  rdev: fileRdevQueryInteger_2 | null;
  ino: fileInoQueryInteger_2 | null;
  atimeMs: fileAtimeMsQueryFloat_2 | null;
  mtimeMs: fileMtimeMsQueryFloat_2 | null;
  ctimeMs: fileCtimeMsQueryFloat_2 | null;
  birthtimeMs: fileBirthtimeMsQueryFloat_2 | null;
  atime: fileAtimeQueryString_2 | null;
  mtime: fileMtimeQueryString_2 | null;
  ctime: fileCtimeQueryString_2 | null;
  birthtime: fileBirthtimeQueryString_2 | null;
}

export interface ImageSharpRootQueryTypeArgs {
  id: imageSharpIdQueryString_2 | null;
  internal: imageSharpInternalInputObject_2 | null;
  original: originalTypeName_3 | null;
  responsiveResolution: responsiveResolutionTypeName_3 | null;
  responsiveSizes: responsiveSizesTypeName_3 | null;
  resize: resizeTypeName_3 | null;
}

export interface MarkdownRemarkRootQueryTypeArgs {
  id: markdownRemarkIdQueryString_2 | null;
  internal: markdownRemarkInternalInputObject_2 | null;
  frontmatter: markdownRemarkFrontmatterInputObject_2 | null;
  fileAbsolutePath: markdownRemarkFileAbsolutePathQueryString_2 | null;
  fields: markdownRemarkFieldsInputObject_2 | null;
  html: htmlQueryString_3 | null;
  excerpt: excerptQueryString_3 | null;
  headings: headingsQueryList_3 | null;
  timeToRead: timeToReadQueryInt_3 | null;
  tableOfContents: tableOfContentsQueryString_3 | null;
}

export interface AuthorJsonRootQueryTypeArgs {
  id: authorJsonIdQueryString_2 | null;
  bio: authorJsonBioQueryString_2 | null;
  avatar: authorJsonAvatarQueryString_2 | null;
  twitter: authorJsonTwitterQueryString_2 | null;
  github: authorJsonGithubQueryString_2 | null;
  internal: authorJsonInternalInputObject_2 | null;
}

export interface sitePageConnectionSort {
  fields: Array<SitePageConnectionSortByFieldsEnum>;
  order: sitePageConnectionSortOrderValues | null;
}

export type SitePageConnectionSortByFieldsEnum = "component" | "path" | "componentChunkName" | "layout" | "jsonName" | "internalComponentName" | "updatedAt" | "context___slug" | "context___tag" | "context___skip" | "pluginCreator___NODE" | "pluginCreatorId" | "componentPath" | "id" | "parent" | "children" | "internal___type" | "internal___contentDigest" | "internal___owner";

export type sitePageConnectionSortOrderValues = "ASC" | "DESC";

export interface filterSitePage {
  component: sitePageConnectionComponentQueryString | null;
  path: sitePageConnectionPathQueryString_2 | null;
  componentChunkName: sitePageConnectionComponentChunkNameQueryString | null;
  layout: sitePageConnectionLayoutQueryString | null;
  jsonName: sitePageConnectionJsonNameQueryString | null;
  internalComponentName: sitePageConnectionInternalComponentNameQueryString | null;
  updatedAt: sitePageConnectionUpdatedAtQueryInteger | null;
  context: sitePageConnectionContextInputObject | null;
  pluginCreatorId: sitePageConnectionPluginCreatorIdQueryString | null;
  componentPath: sitePageConnectionComponentPathQueryString | null;
  id: sitePageConnectionIdQueryString_2 | null;
  internal: sitePageConnectionInternalInputObject_2 | null;
}

export interface sitePageConnectionComponentQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePageConnectionPathQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePageConnectionComponentChunkNameQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePageConnectionLayoutQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePageConnectionJsonNameQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePageConnectionInternalComponentNameQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePageConnectionUpdatedAtQueryInteger {
  eq: number | null;
  ne: number | null;
}

export interface sitePageConnectionContextInputObject {
  slug: sitePageConnectionContextSlugQueryString | null;
  tag: sitePageConnectionContextTagQueryString | null;
  skip: sitePageConnectionContextSkipQueryInteger | null;
}

export interface sitePageConnectionContextSlugQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePageConnectionContextTagQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePageConnectionContextSkipQueryInteger {
  eq: number | null;
  ne: number | null;
}

export interface sitePageConnectionPluginCreatorIdQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePageConnectionComponentPathQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePageConnectionIdQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePageConnectionInternalInputObject_2 {
  type: sitePageConnectionInternalTypeQueryString_2 | null;
  contentDigest: sitePageConnectionInternalContentDigestQueryString_2 | null;
  owner: sitePageConnectionInternalOwnerQueryString_2 | null;
}

export interface sitePageConnectionInternalTypeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePageConnectionInternalContentDigestQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePageConnectionInternalOwnerQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface SitePageConnection {
  pageInfo: PageInfo;
  edges: Array<SitePageEdge> | null;
  totalCount: number | null;
  distinct: Array<string> | null;
  group: Array<sitePageGroupConnectionConnection> | null;
}

export interface DistinctSitePageConnectionArgs {
  field: sitePageDistinctEnum | null;
}

export interface GroupSitePageConnectionArgs {
  skip: number | null;
  limit: number | null;
  field: sitePageGroupEnum | null;
}

export interface PageInfo {
  hasNextPage: boolean;
}

export interface SitePageEdge {
  node: SitePage | null;
  next: SitePage | null;
  previous: SitePage | null;
}

export interface SitePage extends Node {
  id: string;
  parent: Node | null;
  children: Array<Node> | null;
  component: string | null;
  path: string | null;
  componentChunkName: string | null;
  layout: string | null;
  jsonName: string | null;
  internalComponentName: string | null;
  updatedAt: number | null;
  context: context | null;
  pluginCreator: SitePlugin | null;
  pluginCreatorId: string | null;
  componentPath: string | null;
  internal: internal_8 | null;
}

export interface Node {
  id: string;
  parent: Node | null;
  children: Array<Node> | null;
}

export interface context {
  slug: string | null;
  tag: string | null;
  skip: number | null;
}

export interface SitePlugin extends Node {
  id: string;
  parent: Node | null;
  children: Array<Node> | null;
  resolve: string | null;
  name: string | null;
  version: string | null;
  pluginOptions: pluginOptions_3 | null;
  pluginFilepath: string | null;
  packageJson: packageJson_2 | null;
  internal: internal_9 | null;
}

export interface pluginOptions_3 {
  plugins: Array<plugins_2> | null;
  name: string | null;
  path: string | null;
  maxWidth: number | null;
  backgroundColor: string | null;
  wrapperStyle: string | null;
  linkImagesToOriginal: boolean | null;
  pathPrefix: string | null;
  short_name: string | null;
  start_url: string | null;
  background_color: string | null;
  theme_color: string | null;
  display: string | null;
}

export interface plugins_2 {
  resolve: string | null;
  id: string | null;
  name: string | null;
  version: string | null;
  pluginOptions: pluginOptions_4 | null;
  pluginFilepath: string | null;
}

export interface pluginOptions_4 {
  maxWidth: number | null;
  backgroundColor: string | null;
  wrapperStyle: string | null;
  linkImagesToOriginal: boolean | null;
  pathPrefix: string | null;
}

export interface packageJson_2 {
  name: string | null;
  description: string | null;
  version: string | null;
  main: string | null;
  keywords: Array<string> | null;
  author: string | null;
  license: string | null;
  dependencies: Array<dependencies_2> | null;
  devDependencies: Array<devDependencies_2> | null;
}

export interface dependencies_2 {
  name: string | null;
  version: string | null;
}

export interface devDependencies_2 {
  name: string | null;
  version: string | null;
}

export interface internal_9 {
  contentDigest: string | null;
  type: string | null;
  owner: string | null;
}

export interface internal_8 {
  type: string | null;
  contentDigest: string | null;
  owner: string | null;
}

export type sitePageDistinctEnum = "component" | "path" | "componentChunkName" | "layout" | "jsonName" | "internalComponentName" | "updatedAt" | "context___slug" | "context___tag" | "context___skip" | "pluginCreator___NODE" | "pluginCreatorId" | "componentPath" | "id" | "parent" | "internal___type" | "internal___contentDigest" | "internal___owner";

export type sitePageGroupEnum = "component" | "path" | "componentChunkName" | "layout" | "jsonName" | "internalComponentName" | "updatedAt" | "context___slug" | "context___tag" | "context___skip" | "pluginCreator___NODE" | "pluginCreatorId" | "componentPath" | "id" | "parent" | "internal___type" | "internal___contentDigest" | "internal___owner";

export interface sitePageGroupConnectionConnection {
  pageInfo: PageInfo;
  edges: Array<sitePageGroupConnectionEdge> | null;
  field: string | null;
  fieldValue: string | null;
  totalCount: number | null;
}

export interface sitePageGroupConnectionEdge {
  node: SitePage | null;
  next: SitePage | null;
  previous: SitePage | null;
}

export interface sitePluginConnectionSort {
  fields: Array<SitePluginConnectionSortByFieldsEnum>;
  order: sitePluginConnectionSortOrderValues | null;
}

export type SitePluginConnectionSortByFieldsEnum = "resolve" | "id" | "name" | "version" | "pluginOptions___plugins" | "pluginOptions___name" | "pluginOptions___path" | "pluginOptions___maxWidth" | "pluginOptions___backgroundColor" | "pluginOptions___wrapperStyle" | "pluginOptions___linkImagesToOriginal" | "pluginOptions___pathPrefix" | "pluginOptions___short_name" | "pluginOptions___start_url" | "pluginOptions___background_color" | "pluginOptions___theme_color" | "pluginOptions___display" | "pluginFilepath" | "packageJson___name" | "packageJson___description" | "packageJson___version" | "packageJson___main" | "packageJson___keywords" | "packageJson___author" | "packageJson___license" | "packageJson___dependencies" | "packageJson___devDependencies" | "packageJson___peerDependencies" | "packageJson___optionalDependecies" | "packageJson___bundledDependecies" | "parent" | "children" | "internal___contentDigest" | "internal___type" | "internal___owner";

export type sitePluginConnectionSortOrderValues = "ASC" | "DESC";

export interface filterSitePlugin {
  resolve: sitePluginConnectionResolveQueryString_2 | null;
  id: sitePluginConnectionIdQueryString_2 | null;
  name: sitePluginConnectionNameQueryString_2 | null;
  version: sitePluginConnectionVersionQueryString_2 | null;
  pluginOptions: sitePluginConnectionPluginOptionsInputObject_2 | null;
  pluginFilepath: sitePluginConnectionPluginFilepathQueryString_2 | null;
  packageJson: sitePluginConnectionPackageJsonInputObject_2 | null;
  internal: sitePluginConnectionInternalInputObject_2 | null;
}

export interface sitePluginConnectionResolveQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginConnectionIdQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginConnectionNameQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginConnectionVersionQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginConnectionPluginOptionsInputObject_2 {
  plugins: sitePluginConnectionPluginOptionsPluginsQueryList_2 | null;
  name: sitePluginConnectionPluginOptionsNameQueryString_2 | null;
  path: sitePluginConnectionPluginOptionsPathQueryString_2 | null;
  maxWidth: sitePluginConnectionPluginOptionsMaxWidthQueryInteger_2 | null;
  backgroundColor: sitePluginConnectionPluginOptionsBackgroundColorQueryString_3 | null;
  wrapperStyle: sitePluginConnectionPluginOptionsWrapperStyleQueryString | null;
  linkImagesToOriginal: sitePluginConnectionPluginOptionsLinkImagesToOriginalQueryBoolean | null;
  pathPrefix: sitePluginConnectionPluginOptionsPathPrefixQueryString | null;
  short_name: sitePluginConnectionPluginOptionsShortNameQueryString_2 | null;
  start_url: sitePluginConnectionPluginOptionsStartUrlQueryString_2 | null;
  background_color: sitePluginConnectionPluginOptionsBackgroundColorQueryString_4 | null;
  theme_color: sitePluginConnectionPluginOptionsThemeColorQueryString_2 | null;
  display: sitePluginConnectionPluginOptionsDisplayQueryString_2 | null;
}

export interface sitePluginConnectionPluginOptionsPluginsQueryList_2 {
  in: Array<sitePluginConnectionPluginOptionsPluginsInputObject_2> | null;
}

export interface sitePluginConnectionPluginOptionsPluginsInputObject_2 {
  resolve: sitePluginConnectionPluginOptionsPluginsResolveQueryString_2 | null;
  id: sitePluginConnectionPluginOptionsPluginsIdQueryString_2 | null;
  name: sitePluginConnectionPluginOptionsPluginsNameQueryString_2 | null;
  version: sitePluginConnectionPluginOptionsPluginsVersionQueryString_2 | null;
  pluginOptions: sitePluginConnectionPluginOptionsPluginsPluginOptionsInputObject_2 | null;
  pluginFilepath: sitePluginConnectionPluginOptionsPluginsPluginFilepathQueryString_2 | null;
}

export interface sitePluginConnectionPluginOptionsPluginsResolveQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginConnectionPluginOptionsPluginsIdQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginConnectionPluginOptionsPluginsNameQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginConnectionPluginOptionsPluginsVersionQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginConnectionPluginOptionsPluginsPluginOptionsInputObject_2 {
  maxWidth: sitePluginConnectionPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger_2 | null;
  backgroundColor: sitePluginConnectionPluginOptionsPluginsPluginOptionsBackgroundColorQueryString_2 | null;
  wrapperStyle: sitePluginConnectionPluginOptionsPluginsPluginOptionsWrapperStyleQueryString | null;
  linkImagesToOriginal: sitePluginConnectionPluginOptionsPluginsPluginOptionsLinkImagesToOriginalQueryBoolean | null;
  pathPrefix: sitePluginConnectionPluginOptionsPluginsPluginOptionsPathPrefixQueryString | null;
}

export interface sitePluginConnectionPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger_2 {
  eq: number | null;
  ne: number | null;
}

export interface sitePluginConnectionPluginOptionsPluginsPluginOptionsBackgroundColorQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginConnectionPluginOptionsPluginsPluginOptionsWrapperStyleQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginConnectionPluginOptionsPluginsPluginOptionsLinkImagesToOriginalQueryBoolean {
  eq: boolean | null;
  ne: boolean | null;
}

export interface sitePluginConnectionPluginOptionsPluginsPluginOptionsPathPrefixQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginConnectionPluginOptionsPluginsPluginFilepathQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginConnectionPluginOptionsNameQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginConnectionPluginOptionsPathQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginConnectionPluginOptionsMaxWidthQueryInteger_2 {
  eq: number | null;
  ne: number | null;
}

export interface sitePluginConnectionPluginOptionsBackgroundColorQueryString_3 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginConnectionPluginOptionsWrapperStyleQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginConnectionPluginOptionsLinkImagesToOriginalQueryBoolean {
  eq: boolean | null;
  ne: boolean | null;
}

export interface sitePluginConnectionPluginOptionsPathPrefixQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginConnectionPluginOptionsShortNameQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginConnectionPluginOptionsStartUrlQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginConnectionPluginOptionsBackgroundColorQueryString_4 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginConnectionPluginOptionsThemeColorQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginConnectionPluginOptionsDisplayQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginConnectionPluginFilepathQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginConnectionPackageJsonInputObject_2 {
  name: sitePluginConnectionPackageJsonNameQueryString_2 | null;
  description: sitePluginConnectionPackageJsonDescriptionQueryString_2 | null;
  version: sitePluginConnectionPackageJsonVersionQueryString_2 | null;
  main: sitePluginConnectionPackageJsonMainQueryString_2 | null;
  keywords: sitePluginConnectionPackageJsonKeywordsQueryList_2 | null;
  author: sitePluginConnectionPackageJsonAuthorQueryString_2 | null;
  license: sitePluginConnectionPackageJsonLicenseQueryString_2 | null;
  dependencies: sitePluginConnectionPackageJsonDependenciesQueryList_2 | null;
  devDependencies: sitePluginConnectionPackageJsonDevDependenciesQueryList_2 | null;
}

export interface sitePluginConnectionPackageJsonNameQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginConnectionPackageJsonDescriptionQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginConnectionPackageJsonVersionQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginConnectionPackageJsonMainQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginConnectionPackageJsonKeywordsQueryList_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
}

export interface sitePluginConnectionPackageJsonAuthorQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginConnectionPackageJsonLicenseQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginConnectionPackageJsonDependenciesQueryList_2 {
  in: Array<sitePluginConnectionPackageJsonDependenciesInputObject_2> | null;
}

export interface sitePluginConnectionPackageJsonDependenciesInputObject_2 {
  name: sitePluginConnectionPackageJsonDependenciesNameQueryString_2 | null;
  version: sitePluginConnectionPackageJsonDependenciesVersionQueryString_2 | null;
}

export interface sitePluginConnectionPackageJsonDependenciesNameQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginConnectionPackageJsonDependenciesVersionQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginConnectionPackageJsonDevDependenciesQueryList_2 {
  in: Array<sitePluginConnectionPackageJsonDevDependenciesInputObject_2> | null;
}

export interface sitePluginConnectionPackageJsonDevDependenciesInputObject_2 {
  name: sitePluginConnectionPackageJsonDevDependenciesNameQueryString_2 | null;
  version: sitePluginConnectionPackageJsonDevDependenciesVersionQueryString_2 | null;
}

export interface sitePluginConnectionPackageJsonDevDependenciesNameQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginConnectionPackageJsonDevDependenciesVersionQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginConnectionInternalInputObject_2 {
  contentDigest: sitePluginConnectionInternalContentDigestQueryString_2 | null;
  type: sitePluginConnectionInternalTypeQueryString_2 | null;
  owner: sitePluginConnectionInternalOwnerQueryString_2 | null;
}

export interface sitePluginConnectionInternalContentDigestQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginConnectionInternalTypeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginConnectionInternalOwnerQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface SitePluginConnection {
  pageInfo: PageInfo;
  edges: Array<SitePluginEdge> | null;
  totalCount: number | null;
  distinct: Array<string> | null;
  group: Array<sitePluginGroupConnectionConnection> | null;
}

export interface DistinctSitePluginConnectionArgs {
  field: sitePluginDistinctEnum | null;
}

export interface GroupSitePluginConnectionArgs {
  skip: number | null;
  limit: number | null;
  field: sitePluginGroupEnum | null;
}

export interface SitePluginEdge {
  node: SitePlugin | null;
  next: SitePlugin | null;
  previous: SitePlugin | null;
}

export type sitePluginDistinctEnum = "resolve" | "id" | "name" | "version" | "pluginOptions___plugins" | "pluginOptions___name" | "pluginOptions___path" | "pluginOptions___maxWidth" | "pluginOptions___backgroundColor" | "pluginOptions___wrapperStyle" | "pluginOptions___linkImagesToOriginal" | "pluginOptions___pathPrefix" | "pluginOptions___short_name" | "pluginOptions___start_url" | "pluginOptions___background_color" | "pluginOptions___theme_color" | "pluginOptions___display" | "pluginFilepath" | "packageJson___name" | "packageJson___description" | "packageJson___version" | "packageJson___main" | "packageJson___keywords" | "packageJson___author" | "packageJson___license" | "packageJson___dependencies" | "packageJson___devDependencies" | "parent" | "internal___contentDigest" | "internal___type" | "internal___owner";

export type sitePluginGroupEnum = "resolve" | "id" | "name" | "version" | "pluginOptions___plugins" | "pluginOptions___name" | "pluginOptions___path" | "pluginOptions___maxWidth" | "pluginOptions___backgroundColor" | "pluginOptions___wrapperStyle" | "pluginOptions___linkImagesToOriginal" | "pluginOptions___pathPrefix" | "pluginOptions___short_name" | "pluginOptions___start_url" | "pluginOptions___background_color" | "pluginOptions___theme_color" | "pluginOptions___display" | "pluginFilepath" | "packageJson___name" | "packageJson___description" | "packageJson___version" | "packageJson___main" | "packageJson___keywords" | "packageJson___author" | "packageJson___license" | "packageJson___dependencies" | "packageJson___devDependencies" | "parent" | "internal___contentDigest" | "internal___type" | "internal___owner";

export interface sitePluginGroupConnectionConnection {
  pageInfo: PageInfo;
  edges: Array<sitePluginGroupConnectionEdge> | null;
  field: string | null;
  fieldValue: string | null;
  totalCount: number | null;
}

export interface sitePluginGroupConnectionEdge {
  node: SitePlugin | null;
  next: SitePlugin | null;
  previous: SitePlugin | null;
}

export interface fileConnectionSort {
  fields: Array<FileConnectionSortByFieldsEnum>;
  order: fileConnectionSortOrderValues | null;
}

export type FileConnectionSortByFieldsEnum = "id" | "children" | "parent" | "internal___contentDigest" | "internal___mediaType" | "internal___type" | "internal___owner" | "sourceInstanceName" | "absolutePath" | "relativePath" | "extension" | "size" | "prettySize" | "modifiedTime" | "accessTime" | "changeTime" | "birthTime" | "root" | "dir" | "base" | "ext" | "name" | "dev" | "mode" | "nlink" | "uid" | "gid" | "rdev" | "ino" | "atimeMs" | "mtimeMs" | "ctimeMs" | "birthtimeMs" | "atime" | "mtime" | "ctime" | "birthtime";

export type fileConnectionSortOrderValues = "ASC" | "DESC";

export interface filterFile {
  id: fileConnectionIdQueryString_2 | null;
  internal: fileConnectionInternalInputObject_2 | null;
  sourceInstanceName: fileConnectionSourceInstanceNameQueryString_2 | null;
  absolutePath: fileConnectionAbsolutePathQueryString_2 | null;
  relativePath: fileConnectionRelativePathQueryString_2 | null;
  extension: fileConnectionExtensionQueryString_2 | null;
  size: fileConnectionSizeQueryInteger_2 | null;
  prettySize: fileConnectionPrettySizeQueryString_2 | null;
  modifiedTime: fileConnectionModifiedTimeQueryString_2 | null;
  accessTime: fileConnectionAccessTimeQueryString_2 | null;
  changeTime: fileConnectionChangeTimeQueryString_2 | null;
  birthTime: fileConnectionBirthTimeQueryString_2 | null;
  root: fileConnectionRootQueryString_2 | null;
  dir: fileConnectionDirQueryString_2 | null;
  base: fileConnectionBaseQueryString_2 | null;
  ext: fileConnectionExtQueryString_2 | null;
  name: fileConnectionNameQueryString_2 | null;
  dev: fileConnectionDevQueryInteger_2 | null;
  mode: fileConnectionModeQueryInteger_2 | null;
  nlink: fileConnectionNlinkQueryInteger_2 | null;
  uid: fileConnectionUidQueryInteger_2 | null;
  gid: fileConnectionGidQueryInteger_2 | null;
  rdev: fileConnectionRdevQueryInteger_2 | null;
  ino: fileConnectionInoQueryInteger_2 | null;
  atimeMs: fileConnectionAtimeMsQueryFloat_2 | null;
  mtimeMs: fileConnectionMtimeMsQueryFloat_2 | null;
  ctimeMs: fileConnectionCtimeMsQueryFloat_2 | null;
  birthtimeMs: fileConnectionBirthtimeMsQueryFloat_2 | null;
  atime: fileConnectionAtimeQueryString_2 | null;
  mtime: fileConnectionMtimeQueryString_2 | null;
  ctime: fileConnectionCtimeQueryString_2 | null;
  birthtime: fileConnectionBirthtimeQueryString_2 | null;
}

export interface fileConnectionIdQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileConnectionInternalInputObject_2 {
  contentDigest: fileConnectionInternalContentDigestQueryString_2 | null;
  mediaType: fileConnectionInternalMediaTypeQueryString_2 | null;
  type: fileConnectionInternalTypeQueryString_2 | null;
  owner: fileConnectionInternalOwnerQueryString_2 | null;
}

export interface fileConnectionInternalContentDigestQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileConnectionInternalMediaTypeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileConnectionInternalTypeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileConnectionInternalOwnerQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileConnectionSourceInstanceNameQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileConnectionAbsolutePathQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileConnectionRelativePathQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileConnectionExtensionQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileConnectionSizeQueryInteger_2 {
  eq: number | null;
  ne: number | null;
}

export interface fileConnectionPrettySizeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileConnectionModifiedTimeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileConnectionAccessTimeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileConnectionChangeTimeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileConnectionBirthTimeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileConnectionRootQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileConnectionDirQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileConnectionBaseQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileConnectionExtQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileConnectionNameQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileConnectionDevQueryInteger_2 {
  eq: number | null;
  ne: number | null;
}

export interface fileConnectionModeQueryInteger_2 {
  eq: number | null;
  ne: number | null;
}

export interface fileConnectionNlinkQueryInteger_2 {
  eq: number | null;
  ne: number | null;
}

export interface fileConnectionUidQueryInteger_2 {
  eq: number | null;
  ne: number | null;
}

export interface fileConnectionGidQueryInteger_2 {
  eq: number | null;
  ne: number | null;
}

export interface fileConnectionRdevQueryInteger_2 {
  eq: number | null;
  ne: number | null;
}

export interface fileConnectionInoQueryInteger_2 {
  eq: number | null;
  ne: number | null;
}

export interface fileConnectionAtimeMsQueryFloat_2 {
  eq: number | null;
  ne: number | null;
}

export interface fileConnectionMtimeMsQueryFloat_2 {
  eq: number | null;
  ne: number | null;
}

export interface fileConnectionCtimeMsQueryFloat_2 {
  eq: number | null;
  ne: number | null;
}

export interface fileConnectionBirthtimeMsQueryFloat_2 {
  eq: number | null;
  ne: number | null;
}

export interface fileConnectionAtimeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileConnectionMtimeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileConnectionCtimeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileConnectionBirthtimeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface FileConnection {
  pageInfo: PageInfo;
  edges: Array<FileEdge> | null;
  totalCount: number | null;
  distinct: Array<string> | null;
  group: Array<fileGroupConnectionConnection> | null;
}

export interface DistinctFileConnectionArgs {
  field: fileDistinctEnum | null;
}

export interface GroupFileConnectionArgs {
  skip: number | null;
  limit: number | null;
  field: fileGroupEnum | null;
}

export interface FileEdge {
  node: File | null;
  next: File | null;
  previous: File | null;
}

export interface File extends Node {
  id: string;
  parent: Node | null;
  children: Array<Node> | null;
  childMarkdownRemark: MarkdownRemark | null;
  childAuthorJson: AuthorJson | null;
  childImageSharp: ImageSharp | null;
  internal: internal_10 | null;
  sourceInstanceName: string | null;
  absolutePath: string | null;
  relativePath: string | null;
  extension: string | null;
  size: string | null;
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
  atimeMs: number | null;
  mtimeMs: number | null;
  ctimeMs: number | null;
  birthtimeMs: number | null;
  atime: string | null;
  mtime: string | null;
  ctime: string | null;
  birthtime: string | null;
}

export interface SizeFileArgs {
  formatString: string | null;
  fromNow: boolean | null;
  difference: string | null;
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

export interface MarkdownRemark extends Node {
  id: string;
  parent: Node | null;
  children: Array<Node> | null;
  internal: internal_11 | null;
  frontmatter: frontmatter_2 | null;
  fileAbsolutePath: string | null;
  fields: fields_2 | null;
  html: string | null;
  excerpt: string | null;
  headings: Array<MarkdownHeading> | null;
  timeToRead: number | null;
  tableOfContents: string | null;
}

export interface ExcerptMarkdownRemarkArgs {
  pruneLength: number | null;
}

export interface HeadingsMarkdownRemarkArgs {
  depth: HeadingLevels | null;
}

export interface internal_11 {
  content: string | null;
  contentDigest: string | null;
  type: string | null;
  owner: string | null;
  fieldOwners: fieldOwners_2 | null;
}

export interface fieldOwners_2 {
  slug: string | null;
}

export interface frontmatter_2 {
  title: string | null;
  createdDate: string | null;
  updatedDate: string | null;
  author: AuthorJson | null;
  tags: Array<string> | null;
  image: File | null;
  draft: boolean | null;
  _PARENT: string | null;
  parent: string | null;
}

export interface CreatedDatefrontmatter_2Args {
  formatString: string | null;
  fromNow: boolean | null;
  difference: string | null;
}

export interface UpdatedDatefrontmatter_2Args {
  formatString: string | null;
  fromNow: boolean | null;
  difference: string | null;
}

export interface AuthorJson extends Node {
  id: string;
  parent: Node | null;
  children: Array<Node> | null;
  bio: string | null;
  avatar: File | null;
  twitter: string | null;
  github: string | null;
  internal: internal_12 | null;
}

export interface internal_12 {
  contentDigest: string | null;
  type: string | null;
  owner: string | null;
}

export interface fields_2 {
  slug: string | null;
}

export type HeadingLevels = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export interface MarkdownHeading {
  value: string | null;
  depth: number | null;
}

export interface ImageSharp extends Node {
  id: string;
  parent: Node | null;
  children: Array<Node> | null;
  internal: internal_13 | null;
  original: ImageSharpOriginal | null;
  responsiveResolution: ImageSharpResponsiveResolution | null;
  responsiveSizes: ImageSharpResponsiveSizes | null;
  resize: ImageSharpResize | null;
}

export interface ResponsiveResolutionImageSharpArgs {
  width: number | null;
  height: number | null;
  grayscale: boolean | null;
  duotone: DuotoneGradient | null;
  quality: number | null;
  toFormat: ImageFormat | null;
  cropFocus: ImageCropFocus | null;
  rotate: number | null;
}

export interface ResponsiveSizesImageSharpArgs {
  maxWidth: number | null;
  maxHeight: number | null;
  grayscale: boolean | null;
  duotone: DuotoneGradient | null;
  quality: number | null;
  toFormat: ImageFormat | null;
  cropFocus: ImageCropFocus | null;
  rotate: number | null;
}

export interface ResizeImageSharpArgs {
  width: number | null;
  height: number | null;
  quality: number | null;
  jpegProgressive: boolean | null;
  pngCompressionLevel: number | null;
  grayscale: boolean | null;
  duotone: DuotoneGradient | null;
  base64: boolean | null;
  toFormat: ImageFormat | null;
  cropFocus: ImageCropFocus | null;
  rotate: number | null;
}

export interface internal_13 {
  contentDigest: string | null;
  type: string | null;
  owner: string | null;
}

export interface ImageSharpOriginal {
  width: number | null;
  height: number | null;
  src: string | null;
}

export interface DuotoneGradient {
  highlight: string | null;
  shadow: string | null;
}

export type ImageFormat = "NO_CHANGE" | "JPG" | "PNG" | "WEBP";

export type ImageCropFocus = "CENTER" | "NORTH" | "NORTHEAST" | "EAST" | "SOUTHEAST" | "SOUTH" | "SOUTHWEST" | "WEST" | "NORTHWEST" | "ENTROPY" | "ATTENTION";

export interface ImageSharpResponsiveResolution {
  base64: string | null;
  aspectRatio: number | null;
  width: number | null;
  height: number | null;
  src: string | null;
  srcSet: string | null;
  originalName: string | null;
}

export interface ImageSharpResponsiveSizes {
  base64: string | null;
  aspectRatio: number | null;
  src: string | null;
  srcSet: string | null;
  sizes: string | null;
  originalImg: string | null;
  originalName: string | null;
}

export interface ImageSharpResize {
  src: string | null;
  width: number | null;
  height: number | null;
  aspectRatio: number | null;
  originalName: string | null;
}

export interface internal_10 {
  contentDigest: string | null;
  mediaType: string | null;
  type: string | null;
  owner: string | null;
}

export type fileDistinctEnum = "id" | "children" | "parent" | "internal___contentDigest" | "internal___mediaType" | "internal___type" | "internal___owner" | "sourceInstanceName" | "absolutePath" | "relativePath" | "extension" | "size" | "prettySize" | "modifiedTime" | "accessTime" | "changeTime" | "birthTime" | "root" | "dir" | "base" | "ext" | "name" | "dev" | "mode" | "nlink" | "uid" | "gid" | "rdev" | "ino" | "atimeMs" | "mtimeMs" | "ctimeMs" | "birthtimeMs" | "atime" | "mtime" | "ctime" | "birthtime";

export type fileGroupEnum = "id" | "children" | "parent" | "internal___contentDigest" | "internal___mediaType" | "internal___type" | "internal___owner" | "sourceInstanceName" | "absolutePath" | "relativePath" | "extension" | "size" | "prettySize" | "modifiedTime" | "accessTime" | "changeTime" | "birthTime" | "root" | "dir" | "base" | "ext" | "name" | "dev" | "mode" | "nlink" | "uid" | "gid" | "rdev" | "ino" | "atimeMs" | "mtimeMs" | "ctimeMs" | "birthtimeMs" | "atime" | "mtime" | "ctime" | "birthtime";

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

export interface imageSharpConnectionSort {
  fields: Array<ImageSharpConnectionSortByFieldsEnum>;
  order: imageSharpConnectionSortOrderValues | null;
}

export type ImageSharpConnectionSortByFieldsEnum = "id" | "children" | "parent" | "internal___contentDigest" | "internal___type" | "internal___owner" | "original___width" | "original___height" | "original___src" | "responsiveResolution___base64" | "responsiveResolution___aspectRatio" | "responsiveResolution___width" | "responsiveResolution___height" | "responsiveResolution___src" | "responsiveResolution___srcSet" | "responsiveResolution___originalName" | "responsiveSizes___base64" | "responsiveSizes___aspectRatio" | "responsiveSizes___src" | "responsiveSizes___srcSet" | "responsiveSizes___sizes" | "responsiveSizes___originalImg" | "responsiveSizes___originalName" | "resize___src" | "resize___width" | "resize___height" | "resize___aspectRatio" | "resize___originalName";

export type imageSharpConnectionSortOrderValues = "ASC" | "DESC";

export interface filterImageSharp {
  id: imageSharpConnectionIdQueryString_2 | null;
  internal: imageSharpConnectionInternalInputObject_2 | null;
  original: originalTypeName_4 | null;
  responsiveResolution: responsiveResolutionTypeName_4 | null;
  responsiveSizes: responsiveSizesTypeName_4 | null;
  resize: resizeTypeName_4 | null;
}

export interface imageSharpConnectionIdQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface imageSharpConnectionInternalInputObject_2 {
  contentDigest: imageSharpConnectionInternalContentDigestQueryString_2 | null;
  type: imageSharpConnectionInternalTypeQueryString_2 | null;
  owner: imageSharpConnectionInternalOwnerQueryString_2 | null;
}

export interface imageSharpConnectionInternalContentDigestQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface imageSharpConnectionInternalTypeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface imageSharpConnectionInternalOwnerQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface originalTypeName_4 {
  width: originalWidthQueryFloat_4 | null;
  height: originalHeightQueryFloat_4 | null;
  src: originalSrcQueryString_4 | null;
}

export interface originalWidthQueryFloat_4 {
  eq: number | null;
  ne: number | null;
}

export interface originalHeightQueryFloat_4 {
  eq: number | null;
  ne: number | null;
}

export interface originalSrcQueryString_4 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface responsiveResolutionTypeName_4 {
  base64: responsiveResolutionBase64QueryString_4 | null;
  aspectRatio: responsiveResolutionAspectRatioQueryFloat_4 | null;
  width: responsiveResolutionWidthQueryFloat_4 | null;
  height: responsiveResolutionHeightQueryFloat_4 | null;
  src: responsiveResolutionSrcQueryString_4 | null;
  srcSet: responsiveResolutionSrcSetQueryString_4 | null;
  originalName: responsiveResolutionOriginalNameQueryString_4 | null;
}

export interface responsiveResolutionBase64QueryString_4 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface responsiveResolutionAspectRatioQueryFloat_4 {
  eq: number | null;
  ne: number | null;
}

export interface responsiveResolutionWidthQueryFloat_4 {
  eq: number | null;
  ne: number | null;
}

export interface responsiveResolutionHeightQueryFloat_4 {
  eq: number | null;
  ne: number | null;
}

export interface responsiveResolutionSrcQueryString_4 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface responsiveResolutionSrcSetQueryString_4 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface responsiveResolutionOriginalNameQueryString_4 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface responsiveSizesTypeName_4 {
  base64: responsiveSizesBase64QueryString_4 | null;
  aspectRatio: responsiveSizesAspectRatioQueryFloat_4 | null;
  src: responsiveSizesSrcQueryString_4 | null;
  srcSet: responsiveSizesSrcSetQueryString_4 | null;
  sizes: responsiveSizesSizesQueryString_4 | null;
  originalImg: responsiveSizesOriginalImgQueryString_4 | null;
  originalName: responsiveSizesOriginalNameQueryString_4 | null;
}

export interface responsiveSizesBase64QueryString_4 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface responsiveSizesAspectRatioQueryFloat_4 {
  eq: number | null;
  ne: number | null;
}

export interface responsiveSizesSrcQueryString_4 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface responsiveSizesSrcSetQueryString_4 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface responsiveSizesSizesQueryString_4 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface responsiveSizesOriginalImgQueryString_4 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface responsiveSizesOriginalNameQueryString_4 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface resizeTypeName_4 {
  src: resizeSrcQueryString_4 | null;
  width: resizeWidthQueryInt_4 | null;
  height: resizeHeightQueryInt_4 | null;
  aspectRatio: resizeAspectRatioQueryFloat_4 | null;
  originalName: resizeOriginalNameQueryString_4 | null;
}

export interface resizeSrcQueryString_4 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface resizeWidthQueryInt_4 {
  eq: number | null;
  ne: number | null;
}

export interface resizeHeightQueryInt_4 {
  eq: number | null;
  ne: number | null;
}

export interface resizeAspectRatioQueryFloat_4 {
  eq: number | null;
  ne: number | null;
}

export interface resizeOriginalNameQueryString_4 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface ImageSharpConnection {
  pageInfo: PageInfo;
  edges: Array<ImageSharpEdge> | null;
  totalCount: number | null;
  distinct: Array<string> | null;
  group: Array<imageSharpGroupConnectionConnection> | null;
}

export interface DistinctImageSharpConnectionArgs {
  field: imageSharpDistinctEnum | null;
}

export interface GroupImageSharpConnectionArgs {
  skip: number | null;
  limit: number | null;
  field: imageSharpGroupEnum | null;
}

export interface ImageSharpEdge {
  node: ImageSharp | null;
  next: ImageSharp | null;
  previous: ImageSharp | null;
}

export type imageSharpDistinctEnum = "id" | "parent" | "internal___contentDigest" | "internal___type" | "internal___owner";

export type imageSharpGroupEnum = "id" | "parent" | "internal___contentDigest" | "internal___type" | "internal___owner";

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

export interface markdownRemarkConnectionSort {
  fields: Array<MarkdownRemarkConnectionSortByFieldsEnum>;
  order: markdownRemarkConnectionSortOrderValues | null;
}

export type MarkdownRemarkConnectionSortByFieldsEnum = "id" | "children" | "parent" | "internal___content" | "internal___contentDigest" | "internal___type" | "internal___owner" | "internal___fieldOwners___slug" | "frontmatter___title" | "frontmatter___createdDate" | "frontmatter___updatedDate" | "frontmatter___author" | "frontmatter___tags" | "frontmatter___image" | "frontmatter___draft" | "frontmatter____PARENT" | "frontmatter___parent" | "fileAbsolutePath" | "fields___slug" | "html" | "excerpt" | "headings" | "timeToRead" | "tableOfContents";

export type markdownRemarkConnectionSortOrderValues = "ASC" | "DESC";

export interface filterMarkdownRemark {
  id: markdownRemarkConnectionIdQueryString_2 | null;
  internal: markdownRemarkConnectionInternalInputObject_2 | null;
  frontmatter: markdownRemarkConnectionFrontmatterInputObject_2 | null;
  fileAbsolutePath: markdownRemarkConnectionFileAbsolutePathQueryString_2 | null;
  fields: markdownRemarkConnectionFieldsInputObject_2 | null;
  html: htmlQueryString_4 | null;
  excerpt: excerptQueryString_4 | null;
  headings: headingsQueryList_4 | null;
  timeToRead: timeToReadQueryInt_4 | null;
  tableOfContents: tableOfContentsQueryString_4 | null;
}

export interface markdownRemarkConnectionIdQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface markdownRemarkConnectionInternalInputObject_2 {
  content: markdownRemarkConnectionInternalContentQueryString_2 | null;
  contentDigest: markdownRemarkConnectionInternalContentDigestQueryString_2 | null;
  type: markdownRemarkConnectionInternalTypeQueryString_2 | null;
  owner: markdownRemarkConnectionInternalOwnerQueryString_2 | null;
  fieldOwners: markdownRemarkConnectionInternalFieldOwnersInputObject_2 | null;
}

export interface markdownRemarkConnectionInternalContentQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface markdownRemarkConnectionInternalContentDigestQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface markdownRemarkConnectionInternalTypeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface markdownRemarkConnectionInternalOwnerQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface markdownRemarkConnectionInternalFieldOwnersInputObject_2 {
  slug: markdownRemarkConnectionInternalFieldOwnersSlugQueryString_2 | null;
}

export interface markdownRemarkConnectionInternalFieldOwnersSlugQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface markdownRemarkConnectionFrontmatterInputObject_2 {
  title: markdownRemarkConnectionFrontmatterTitleQueryString_2 | null;
  createdDate: markdownRemarkConnectionFrontmatterCreatedDateQueryString_2 | null;
  updatedDate: markdownRemarkConnectionFrontmatterUpdatedDateQueryString_2 | null;
  author: markdownRemarkConnectionFrontmatterAuthorQueryString_2 | null;
  tags: markdownRemarkConnectionFrontmatterTagsQueryList_2 | null;
  image: markdownRemarkConnectionFrontmatterImageQueryString_2 | null;
  draft: markdownRemarkConnectionFrontmatterDraftQueryBoolean_2 | null;
  _PARENT: markdownRemarkConnectionFrontmatterParentQueryString_3 | null;
  parent: markdownRemarkConnectionFrontmatterParentQueryString_4 | null;
}

export interface markdownRemarkConnectionFrontmatterTitleQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface markdownRemarkConnectionFrontmatterCreatedDateQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface markdownRemarkConnectionFrontmatterUpdatedDateQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface markdownRemarkConnectionFrontmatterAuthorQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface markdownRemarkConnectionFrontmatterTagsQueryList_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
}

export interface markdownRemarkConnectionFrontmatterImageQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface markdownRemarkConnectionFrontmatterDraftQueryBoolean_2 {
  eq: boolean | null;
  ne: boolean | null;
}

export interface markdownRemarkConnectionFrontmatterParentQueryString_3 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface markdownRemarkConnectionFrontmatterParentQueryString_4 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface markdownRemarkConnectionFileAbsolutePathQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface markdownRemarkConnectionFieldsInputObject_2 {
  slug: markdownRemarkConnectionFieldsSlugQueryString_2 | null;
}

export interface markdownRemarkConnectionFieldsSlugQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface htmlQueryString_4 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface excerptQueryString_4 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface headingsQueryList_4 {
  value: headingsListElemValueQueryString_4 | null;
  depth: headingsListElemDepthQueryInt_4 | null;
  in: Array<markdownHeadingInputObject_4> | null;
}

export interface headingsListElemValueQueryString_4 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface headingsListElemDepthQueryInt_4 {
  eq: number | null;
  ne: number | null;
}

export interface markdownHeadingInputObject_4 {
  value: string | null;
  depth: number | null;
}

export interface timeToReadQueryInt_4 {
  eq: number | null;
  ne: number | null;
}

export interface tableOfContentsQueryString_4 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface MarkdownRemarkConnection {
  pageInfo: PageInfo;
  edges: Array<MarkdownRemarkEdge> | null;
  totalCount: number | null;
  distinct: Array<string> | null;
  group: Array<markdownRemarkGroupConnectionConnection> | null;
}

export interface DistinctMarkdownRemarkConnectionArgs {
  field: markdownRemarkDistinctEnum | null;
}

export interface GroupMarkdownRemarkConnectionArgs {
  skip: number | null;
  limit: number | null;
  field: markdownRemarkGroupEnum | null;
}

export interface MarkdownRemarkEdge {
  node: MarkdownRemark | null;
  next: MarkdownRemark | null;
  previous: MarkdownRemark | null;
}

export type markdownRemarkDistinctEnum = "id" | "parent" | "internal___content" | "internal___contentDigest" | "internal___type" | "internal___owner" | "internal___fieldOwners___slug" | "frontmatter___title" | "frontmatter___createdDate" | "frontmatter___updatedDate" | "frontmatter___author" | "frontmatter___tags" | "frontmatter___image" | "frontmatter___draft" | "frontmatter____PARENT" | "frontmatter___parent" | "fileAbsolutePath" | "fields___slug";

export type markdownRemarkGroupEnum = "id" | "parent" | "internal___content" | "internal___contentDigest" | "internal___type" | "internal___owner" | "internal___fieldOwners___slug" | "frontmatter___title" | "frontmatter___createdDate" | "frontmatter___updatedDate" | "frontmatter___author" | "frontmatter___tags" | "frontmatter___image" | "frontmatter___draft" | "frontmatter____PARENT" | "frontmatter___parent" | "fileAbsolutePath" | "fields___slug";

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

export interface authorJsonConnectionSort {
  fields: Array<AuthorJsonConnectionSortByFieldsEnum>;
  order: authorJsonConnectionSortOrderValues | null;
}

export type AuthorJsonConnectionSortByFieldsEnum = "id" | "bio" | "avatar" | "twitter" | "github" | "children" | "parent" | "internal___contentDigest" | "internal___type" | "internal___owner";

export type authorJsonConnectionSortOrderValues = "ASC" | "DESC";

export interface filterAuthorJson {
  id: authorJsonConnectionIdQueryString_2 | null;
  bio: authorJsonConnectionBioQueryString_2 | null;
  avatar: authorJsonConnectionAvatarQueryString_2 | null;
  twitter: authorJsonConnectionTwitterQueryString_2 | null;
  github: authorJsonConnectionGithubQueryString_2 | null;
  internal: authorJsonConnectionInternalInputObject_2 | null;
}

export interface authorJsonConnectionIdQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface authorJsonConnectionBioQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface authorJsonConnectionAvatarQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface authorJsonConnectionTwitterQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface authorJsonConnectionGithubQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface authorJsonConnectionInternalInputObject_2 {
  contentDigest: authorJsonConnectionInternalContentDigestQueryString_2 | null;
  type: authorJsonConnectionInternalTypeQueryString_2 | null;
  owner: authorJsonConnectionInternalOwnerQueryString_2 | null;
}

export interface authorJsonConnectionInternalContentDigestQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface authorJsonConnectionInternalTypeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface authorJsonConnectionInternalOwnerQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface AuthorJsonConnection {
  pageInfo: PageInfo;
  edges: Array<AuthorJsonEdge> | null;
  totalCount: number | null;
  distinct: Array<string> | null;
  group: Array<authorJsonGroupConnectionConnection> | null;
}

export interface DistinctAuthorJsonConnectionArgs {
  field: authorJsonDistinctEnum | null;
}

export interface GroupAuthorJsonConnectionArgs {
  skip: number | null;
  limit: number | null;
  field: authorJsonGroupEnum | null;
}

export interface AuthorJsonEdge {
  node: AuthorJson | null;
  next: AuthorJson | null;
  previous: AuthorJson | null;
}

export type authorJsonDistinctEnum = "id" | "bio" | "avatar" | "twitter" | "github" | "parent" | "internal___contentDigest" | "internal___type" | "internal___owner";

export type authorJsonGroupEnum = "id" | "bio" | "avatar" | "twitter" | "github" | "parent" | "internal___contentDigest" | "internal___type" | "internal___owner";

export interface authorJsonGroupConnectionConnection {
  pageInfo: PageInfo;
  edges: Array<authorJsonGroupConnectionEdge> | null;
  field: string | null;
  fieldValue: string | null;
  totalCount: number | null;
}

export interface authorJsonGroupConnectionEdge {
  node: AuthorJson | null;
  next: AuthorJson | null;
  previous: AuthorJson | null;
}

export interface sitePageComponentQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePagePathQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePageComponentChunkNameQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePageLayoutQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePageJsonNameQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePageInternalComponentNameQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePageUpdatedAtQueryInteger {
  eq: number | null;
  ne: number | null;
}

export interface sitePageContextInputObject {
  slug: sitePageContextSlugQueryString | null;
  tag: sitePageContextTagQueryString | null;
  skip: sitePageContextSkipQueryInteger | null;
}

export interface sitePageContextSlugQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePageContextTagQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePageContextSkipQueryInteger {
  eq: number | null;
  ne: number | null;
}

export interface sitePagePluginCreatorIdQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePageComponentPathQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePageIdQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePageInternalInputObject_2 {
  type: sitePageInternalTypeQueryString_2 | null;
  contentDigest: sitePageInternalContentDigestQueryString_2 | null;
  owner: sitePageInternalOwnerQueryString_2 | null;
}

export interface sitePageInternalTypeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePageInternalContentDigestQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePageInternalOwnerQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginResolveQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginIdQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginNameQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginVersionQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginPluginOptionsInputObject_2 {
  plugins: sitePluginPluginOptionsPluginsQueryList_2 | null;
  name: sitePluginPluginOptionsNameQueryString_2 | null;
  path: sitePluginPluginOptionsPathQueryString_2 | null;
  maxWidth: sitePluginPluginOptionsMaxWidthQueryInteger_2 | null;
  backgroundColor: sitePluginPluginOptionsBackgroundColorQueryString_3 | null;
  wrapperStyle: sitePluginPluginOptionsWrapperStyleQueryString | null;
  linkImagesToOriginal: sitePluginPluginOptionsLinkImagesToOriginalQueryBoolean | null;
  pathPrefix: sitePluginPluginOptionsPathPrefixQueryString | null;
  short_name: sitePluginPluginOptionsShortNameQueryString_2 | null;
  start_url: sitePluginPluginOptionsStartUrlQueryString_2 | null;
  background_color: sitePluginPluginOptionsBackgroundColorQueryString_4 | null;
  theme_color: sitePluginPluginOptionsThemeColorQueryString_2 | null;
  display: sitePluginPluginOptionsDisplayQueryString_2 | null;
}

export interface sitePluginPluginOptionsPluginsQueryList_2 {
  in: Array<sitePluginPluginOptionsPluginsInputObject_2> | null;
}

export interface sitePluginPluginOptionsPluginsInputObject_2 {
  resolve: sitePluginPluginOptionsPluginsResolveQueryString_2 | null;
  id: sitePluginPluginOptionsPluginsIdQueryString_2 | null;
  name: sitePluginPluginOptionsPluginsNameQueryString_2 | null;
  version: sitePluginPluginOptionsPluginsVersionQueryString_2 | null;
  pluginOptions: sitePluginPluginOptionsPluginsPluginOptionsInputObject_2 | null;
  pluginFilepath: sitePluginPluginOptionsPluginsPluginFilepathQueryString_2 | null;
}

export interface sitePluginPluginOptionsPluginsResolveQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginPluginOptionsPluginsIdQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginPluginOptionsPluginsNameQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginPluginOptionsPluginsVersionQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginPluginOptionsPluginsPluginOptionsInputObject_2 {
  maxWidth: sitePluginPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger_2 | null;
  backgroundColor: sitePluginPluginOptionsPluginsPluginOptionsBackgroundColorQueryString_2 | null;
  wrapperStyle: sitePluginPluginOptionsPluginsPluginOptionsWrapperStyleQueryString | null;
  linkImagesToOriginal: sitePluginPluginOptionsPluginsPluginOptionsLinkImagesToOriginalQueryBoolean | null;
  pathPrefix: sitePluginPluginOptionsPluginsPluginOptionsPathPrefixQueryString | null;
}

export interface sitePluginPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger_2 {
  eq: number | null;
  ne: number | null;
}

export interface sitePluginPluginOptionsPluginsPluginOptionsBackgroundColorQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginPluginOptionsPluginsPluginOptionsWrapperStyleQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginPluginOptionsPluginsPluginOptionsLinkImagesToOriginalQueryBoolean {
  eq: boolean | null;
  ne: boolean | null;
}

export interface sitePluginPluginOptionsPluginsPluginOptionsPathPrefixQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginPluginOptionsPluginsPluginFilepathQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginPluginOptionsNameQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginPluginOptionsPathQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginPluginOptionsMaxWidthQueryInteger_2 {
  eq: number | null;
  ne: number | null;
}

export interface sitePluginPluginOptionsBackgroundColorQueryString_3 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginPluginOptionsWrapperStyleQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginPluginOptionsLinkImagesToOriginalQueryBoolean {
  eq: boolean | null;
  ne: boolean | null;
}

export interface sitePluginPluginOptionsPathPrefixQueryString {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginPluginOptionsShortNameQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginPluginOptionsStartUrlQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginPluginOptionsBackgroundColorQueryString_4 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginPluginOptionsThemeColorQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginPluginOptionsDisplayQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginPluginFilepathQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginPackageJsonInputObject_2 {
  name: sitePluginPackageJsonNameQueryString_2 | null;
  description: sitePluginPackageJsonDescriptionQueryString_2 | null;
  version: sitePluginPackageJsonVersionQueryString_2 | null;
  main: sitePluginPackageJsonMainQueryString_2 | null;
  keywords: sitePluginPackageJsonKeywordsQueryList_2 | null;
  author: sitePluginPackageJsonAuthorQueryString_2 | null;
  license: sitePluginPackageJsonLicenseQueryString_2 | null;
  dependencies: sitePluginPackageJsonDependenciesQueryList_2 | null;
  devDependencies: sitePluginPackageJsonDevDependenciesQueryList_2 | null;
}

export interface sitePluginPackageJsonNameQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginPackageJsonDescriptionQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginPackageJsonVersionQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginPackageJsonMainQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginPackageJsonKeywordsQueryList_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
}

export interface sitePluginPackageJsonAuthorQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginPackageJsonLicenseQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginPackageJsonDependenciesQueryList_2 {
  in: Array<sitePluginPackageJsonDependenciesInputObject_2> | null;
}

export interface sitePluginPackageJsonDependenciesInputObject_2 {
  name: sitePluginPackageJsonDependenciesNameQueryString_2 | null;
  version: sitePluginPackageJsonDependenciesVersionQueryString_2 | null;
}

export interface sitePluginPackageJsonDependenciesNameQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginPackageJsonDependenciesVersionQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginPackageJsonDevDependenciesQueryList_2 {
  in: Array<sitePluginPackageJsonDevDependenciesInputObject_2> | null;
}

export interface sitePluginPackageJsonDevDependenciesInputObject_2 {
  name: sitePluginPackageJsonDevDependenciesNameQueryString_2 | null;
  version: sitePluginPackageJsonDevDependenciesVersionQueryString_2 | null;
}

export interface sitePluginPackageJsonDevDependenciesNameQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginPackageJsonDevDependenciesVersionQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginInternalInputObject_2 {
  contentDigest: sitePluginInternalContentDigestQueryString_2 | null;
  type: sitePluginInternalTypeQueryString_2 | null;
  owner: sitePluginInternalOwnerQueryString_2 | null;
}

export interface sitePluginInternalContentDigestQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginInternalTypeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePluginInternalOwnerQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface siteSiteMetadataInputObject_2 {
  title: siteSiteMetadataTitleQueryString_2 | null;
}

export interface siteSiteMetadataTitleQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePortQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface siteHostQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface siteMappingInputObject_2 {
  MarkdownRemark_frontmatter_author: siteMappingMarkdownRemarkFrontmatterAuthorQueryString_2 | null;
}

export interface siteMappingMarkdownRemarkFrontmatterAuthorQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePathPrefixQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface sitePolyfillQueryBoolean_2 {
  eq: boolean | null;
  ne: boolean | null;
}

export interface siteBuildTimeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface siteIdQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface siteInternalInputObject_2 {
  contentDigest: siteInternalContentDigestQueryString_2 | null;
  type: siteInternalTypeQueryString_2 | null;
  owner: siteInternalOwnerQueryString_2 | null;
}

export interface siteInternalContentDigestQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface siteInternalTypeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface siteInternalOwnerQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface Site extends Node {
  id: string;
  parent: Node | null;
  children: Array<Node> | null;
  siteMetadata: siteMetadata_2 | null;
  port: string | null;
  host: string | null;
  mapping: mapping_2 | null;
  pathPrefix: string | null;
  polyfill: boolean | null;
  buildTime: string | null;
  internal: internal_14 | null;
}

export interface PortSiteArgs {
  formatString: string | null;
  fromNow: boolean | null;
  difference: string | null;
}

export interface BuildTimeSiteArgs {
  formatString: string | null;
  fromNow: boolean | null;
  difference: string | null;
}

export interface siteMetadata_2 {
  title: string | null;
}

export interface mapping_2 {
  MarkdownRemark_frontmatter_author: string | null;
}

export interface internal_14 {
  contentDigest: string | null;
  type: string | null;
  owner: string | null;
}

export interface fileIdQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileInternalInputObject_2 {
  contentDigest: fileInternalContentDigestQueryString_2 | null;
  mediaType: fileInternalMediaTypeQueryString_2 | null;
  type: fileInternalTypeQueryString_2 | null;
  owner: fileInternalOwnerQueryString_2 | null;
}

export interface fileInternalContentDigestQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileInternalMediaTypeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileInternalTypeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileInternalOwnerQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileSourceInstanceNameQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileAbsolutePathQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileRelativePathQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileExtensionQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileSizeQueryInteger_2 {
  eq: number | null;
  ne: number | null;
}

export interface filePrettySizeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileModifiedTimeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileAccessTimeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileChangeTimeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileBirthTimeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileRootQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileDirQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileBaseQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileExtQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileNameQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileDevQueryInteger_2 {
  eq: number | null;
  ne: number | null;
}

export interface fileModeQueryInteger_2 {
  eq: number | null;
  ne: number | null;
}

export interface fileNlinkQueryInteger_2 {
  eq: number | null;
  ne: number | null;
}

export interface fileUidQueryInteger_2 {
  eq: number | null;
  ne: number | null;
}

export interface fileGidQueryInteger_2 {
  eq: number | null;
  ne: number | null;
}

export interface fileRdevQueryInteger_2 {
  eq: number | null;
  ne: number | null;
}

export interface fileInoQueryInteger_2 {
  eq: number | null;
  ne: number | null;
}

export interface fileAtimeMsQueryFloat_2 {
  eq: number | null;
  ne: number | null;
}

export interface fileMtimeMsQueryFloat_2 {
  eq: number | null;
  ne: number | null;
}

export interface fileCtimeMsQueryFloat_2 {
  eq: number | null;
  ne: number | null;
}

export interface fileBirthtimeMsQueryFloat_2 {
  eq: number | null;
  ne: number | null;
}

export interface fileAtimeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileMtimeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileCtimeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface fileBirthtimeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface imageSharpIdQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface imageSharpInternalInputObject_2 {
  contentDigest: imageSharpInternalContentDigestQueryString_2 | null;
  type: imageSharpInternalTypeQueryString_2 | null;
  owner: imageSharpInternalOwnerQueryString_2 | null;
}

export interface imageSharpInternalContentDigestQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface imageSharpInternalTypeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface imageSharpInternalOwnerQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface originalTypeName_3 {
  width: originalWidthQueryFloat_3 | null;
  height: originalHeightQueryFloat_3 | null;
  src: originalSrcQueryString_3 | null;
}

export interface originalWidthQueryFloat_3 {
  eq: number | null;
  ne: number | null;
}

export interface originalHeightQueryFloat_3 {
  eq: number | null;
  ne: number | null;
}

export interface originalSrcQueryString_3 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface responsiveResolutionTypeName_3 {
  base64: responsiveResolutionBase64QueryString_3 | null;
  aspectRatio: responsiveResolutionAspectRatioQueryFloat_3 | null;
  width: responsiveResolutionWidthQueryFloat_3 | null;
  height: responsiveResolutionHeightQueryFloat_3 | null;
  src: responsiveResolutionSrcQueryString_3 | null;
  srcSet: responsiveResolutionSrcSetQueryString_3 | null;
  originalName: responsiveResolutionOriginalNameQueryString_3 | null;
}

export interface responsiveResolutionBase64QueryString_3 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface responsiveResolutionAspectRatioQueryFloat_3 {
  eq: number | null;
  ne: number | null;
}

export interface responsiveResolutionWidthQueryFloat_3 {
  eq: number | null;
  ne: number | null;
}

export interface responsiveResolutionHeightQueryFloat_3 {
  eq: number | null;
  ne: number | null;
}

export interface responsiveResolutionSrcQueryString_3 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface responsiveResolutionSrcSetQueryString_3 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface responsiveResolutionOriginalNameQueryString_3 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface responsiveSizesTypeName_3 {
  base64: responsiveSizesBase64QueryString_3 | null;
  aspectRatio: responsiveSizesAspectRatioQueryFloat_3 | null;
  src: responsiveSizesSrcQueryString_3 | null;
  srcSet: responsiveSizesSrcSetQueryString_3 | null;
  sizes: responsiveSizesSizesQueryString_3 | null;
  originalImg: responsiveSizesOriginalImgQueryString_3 | null;
  originalName: responsiveSizesOriginalNameQueryString_3 | null;
}

export interface responsiveSizesBase64QueryString_3 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface responsiveSizesAspectRatioQueryFloat_3 {
  eq: number | null;
  ne: number | null;
}

export interface responsiveSizesSrcQueryString_3 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface responsiveSizesSrcSetQueryString_3 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface responsiveSizesSizesQueryString_3 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface responsiveSizesOriginalImgQueryString_3 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface responsiveSizesOriginalNameQueryString_3 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface resizeTypeName_3 {
  src: resizeSrcQueryString_3 | null;
  width: resizeWidthQueryInt_3 | null;
  height: resizeHeightQueryInt_3 | null;
  aspectRatio: resizeAspectRatioQueryFloat_3 | null;
  originalName: resizeOriginalNameQueryString_3 | null;
}

export interface resizeSrcQueryString_3 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface resizeWidthQueryInt_3 {
  eq: number | null;
  ne: number | null;
}

export interface resizeHeightQueryInt_3 {
  eq: number | null;
  ne: number | null;
}

export interface resizeAspectRatioQueryFloat_3 {
  eq: number | null;
  ne: number | null;
}

export interface resizeOriginalNameQueryString_3 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface markdownRemarkIdQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface markdownRemarkInternalInputObject_2 {
  content: markdownRemarkInternalContentQueryString_2 | null;
  contentDigest: markdownRemarkInternalContentDigestQueryString_2 | null;
  type: markdownRemarkInternalTypeQueryString_2 | null;
  owner: markdownRemarkInternalOwnerQueryString_2 | null;
  fieldOwners: markdownRemarkInternalFieldOwnersInputObject_2 | null;
}

export interface markdownRemarkInternalContentQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface markdownRemarkInternalContentDigestQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface markdownRemarkInternalTypeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface markdownRemarkInternalOwnerQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface markdownRemarkInternalFieldOwnersInputObject_2 {
  slug: markdownRemarkInternalFieldOwnersSlugQueryString_2 | null;
}

export interface markdownRemarkInternalFieldOwnersSlugQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface markdownRemarkFrontmatterInputObject_2 {
  title: markdownRemarkFrontmatterTitleQueryString_2 | null;
  createdDate: markdownRemarkFrontmatterCreatedDateQueryString_2 | null;
  updatedDate: markdownRemarkFrontmatterUpdatedDateQueryString_2 | null;
  author: markdownRemarkFrontmatterAuthorQueryString_2 | null;
  tags: markdownRemarkFrontmatterTagsQueryList_2 | null;
  image: markdownRemarkFrontmatterImageQueryString_2 | null;
  draft: markdownRemarkFrontmatterDraftQueryBoolean_2 | null;
  _PARENT: markdownRemarkFrontmatterParentQueryString_3 | null;
  parent: markdownRemarkFrontmatterParentQueryString_4 | null;
}

export interface markdownRemarkFrontmatterTitleQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface markdownRemarkFrontmatterCreatedDateQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface markdownRemarkFrontmatterUpdatedDateQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface markdownRemarkFrontmatterAuthorQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface markdownRemarkFrontmatterTagsQueryList_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
  in: Array<string> | null;
}

export interface markdownRemarkFrontmatterImageQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface markdownRemarkFrontmatterDraftQueryBoolean_2 {
  eq: boolean | null;
  ne: boolean | null;
}

export interface markdownRemarkFrontmatterParentQueryString_3 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface markdownRemarkFrontmatterParentQueryString_4 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface markdownRemarkFileAbsolutePathQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface markdownRemarkFieldsInputObject_2 {
  slug: markdownRemarkFieldsSlugQueryString_2 | null;
}

export interface markdownRemarkFieldsSlugQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface htmlQueryString_3 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface excerptQueryString_3 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface headingsQueryList_3 {
  value: headingsListElemValueQueryString_3 | null;
  depth: headingsListElemDepthQueryInt_3 | null;
  in: Array<markdownHeadingInputObject_3> | null;
}

export interface headingsListElemValueQueryString_3 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface headingsListElemDepthQueryInt_3 {
  eq: number | null;
  ne: number | null;
}

export interface markdownHeadingInputObject_3 {
  value: string | null;
  depth: number | null;
}

export interface timeToReadQueryInt_3 {
  eq: number | null;
  ne: number | null;
}

export interface tableOfContentsQueryString_3 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface authorJsonIdQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface authorJsonBioQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface authorJsonAvatarQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface authorJsonTwitterQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface authorJsonGithubQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface authorJsonInternalInputObject_2 {
  contentDigest: authorJsonInternalContentDigestQueryString_2 | null;
  type: authorJsonInternalTypeQueryString_2 | null;
  owner: authorJsonInternalOwnerQueryString_2 | null;
}

export interface authorJsonInternalContentDigestQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface authorJsonInternalTypeQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}

export interface authorJsonInternalOwnerQueryString_2 {
  eq: string | null;
  ne: string | null;
  regex: string | null;
  glob: string | null;
}
