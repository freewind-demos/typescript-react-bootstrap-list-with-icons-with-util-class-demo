import React, {FC, ReactNode, PropsWithChildren} from 'react';

type Props = {
  start?: React.ReactNode,
  end?: ReactNode,
}

export const ItemWithIcons: FC<PropsWithChildren<Props>> = ({start, children, end}) => {
  return <div className='d-flex p-1'>
    {start && <span className='flex-grow-0'>{start}</span>}
    <span className='flex-grow-1 ms-1 me-1'>{children}</span>
    {end && <span className='flex-grow-0'>{end}</span>}
  </div>
}
