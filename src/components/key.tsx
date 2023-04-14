import React, { FC } from 'react'
interface Props {
  CalcKey: string
}
const Key: FC<Props> = ({ CalcKey }) => {
  return <button className="key">{CalcKey}</button>
}

export default Key
