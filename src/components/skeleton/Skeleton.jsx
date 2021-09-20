import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
    <ContentLoader 
    speed={1}
    width={400}
    height={300}
    viewBox="0 0 400 400"
    backgroundColor="#555555"
    foregroundColor="#FFFFFF"
    {...props}
  >
    <rect x="0" y="60" rx="2" ry="2" width="400" height="300" />
  </ContentLoader>
)

export default Skeleton;