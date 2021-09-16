import React, {FC} from 'react';


export const UtilClassnames: FC = () => {
  return <div>
    <div>
      <legend>Margin Bottom</legend>
      <div>
        <div className="mb-0 bd-highlight">.mb-0</div>
        <div className="mb-1 bd-highlight">.mb-1</div>
        <div className="mb-2 bd-highlight">.mb-2</div>
        <div className="mb-3 bd-highlight">.mb-3</div>
        <div className="mb-4 bd-highlight">.mb-4</div>
        <div className="mb-5 bd-highlight">.mb-5</div>
        <div className="mb-auto bd-highlight">.mb-auto</div>
      </div>
    </div>
  </div>;
}
