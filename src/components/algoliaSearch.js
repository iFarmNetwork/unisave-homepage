import React, { useEffect } from 'react'
import styled from 'styled-components'

const SearchWrapper = styled.div`
  position: relative;
  width: 100%;
  form {
    margin-bottom: 0px;
  }
`

const StyledForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 12px;
  color: ${({ theme }) => theme.colors.grey2};
  background-color: ${({ theme }) => theme.colors.grey1};
  margin: 0px;
  margin-right: 12px;
  @media (max-width: 960px) {
    margin-right: 0;
  }
`

const StyledInput = styled.input`
  background-color: transparent;
  color: ${({ theme }) => theme.textColor};
  border-radius: 8px;
  padding: 0.25rem 0.5rem;
  width: 100%;
  border: none;
  @media (max-width: 960px) {
    padding: 0.5rem 0.75rem;
  }
  :focus {
    outline: none;
  }
`

const ClearButton = styled.button`
  opacity: ${({ isActive }) => (isActive ? 1 : 0.2)};
  background-color: unset;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: ${({ isActive }) => (isActive ? 'initial' : 'none')};
  path {
    stroke: ${({ theme }) => theme.colors.textColor};
  }
  :focus {
    outline: none;
  }
  :hover {
    cursor: ${({ isActive }) => (isActive ? 'pointer' : 'initial')};
  }
`

export default function Search() {
  /**
   * @todo move this to env, update with official account creds
   */
  useEffect(() => {
    if (window.docsearch) {
      window.docsearch({
        apiKey: '3d44be3728a9ae9799681c70a19a5179',
        indexName: 'uniswap_v2_docs',
        inputSelector: '.docsearch', // the selector of my search input
        appId: 'VZ0CVS8XCW'
      })
    } else {
      console.warn('ERROR: Search input')
    }
  }, [])

  return (
    <SearchWrapper>
      <StyledForm>
        <StyledInput className="docsearch" id="docusearch" placeholder="Search Docs..." />
        <ClearButton />
      </StyledForm>
    </SearchWrapper>
  )
}