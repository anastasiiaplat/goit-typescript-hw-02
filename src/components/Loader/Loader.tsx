import { MagnifyingGlass } from 'react-loader-spinner'
import { FC } from 'react'
const Loader: FC = () => {
  return (
<div>
    <MagnifyingGlass
      visible={true}
      height="80"
      width="80"
      ariaLabel="magnifying-glass-loading"
      wrapperStyle={{}}
      wrapperClass="magnifying-glass-wrapper"
      glassColor="#c0efff"
      color="blue"
      />
</div>
  )
}

export default Loader