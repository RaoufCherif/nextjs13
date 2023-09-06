import React from 'react'

export const BoardPage = ({
  params,
  searchParams,
}: {
  params: { boardId: string};
  searchParams: { [key: string]: string | string[] | undefined }
}) => {

  return (
    <>
    <div>Board page</div>
    <p>{ params.boardId } </p>
    <h1>hhhhhhhhhhh</h1>
    <p>{ JSON.stringify(searchParams) } </p>
    </>
  )
}

export default BoardPage