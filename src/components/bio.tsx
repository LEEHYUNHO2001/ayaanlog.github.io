/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <Container>
      <GitHubContainer>
        <GitHubImage
          src="https://avatars.githubusercontent.com/LEEHYUNHO2001"
          alt="Profile picture"
        />
        <GitHubLinkContainer>
          <a href={`${social?.github}`}>GitHub</a>
        </GitHubLinkContainer>
      </GitHubContainer>
      {author?.name && (
        <p>
          안녕하세요. <strong>{author.name}</strong>입니다.
        </p>
      )}
      <p>
        Blog는 아직 개설되지 않았습니다. <a href={`${social?.velog}`}>Velog</a>
        에서 확인해주세요.
      </p>
    </Container>
  )
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const GitHubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const GitHubImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`
const GitHubLinkContainer = styled.p``

export default Bio
