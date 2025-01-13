import React from 'react'
import Homes from "../pages/layout/homes"
import Branding from "./branding"
import Services from "../pages/layout/services"
import Wrapper from "../pages/layout/wrapper"
import Skill from "../pages/layout/skills"
import WrapperOne from '../pages/layout/wrapper-one'
import Blogs from "../pages/layout/blogs"

const Homepage = () => {
  return (
    <>
      <Homes />
      <Branding />
      <Services />
      <Wrapper />
      <Skill />
      <WrapperOne />
      <Blogs />
    </>
  )
}

export default Homepage
