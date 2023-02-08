import React, { useState } from 'react';

const Tabs: React.FC<{}> = () => {

  const tabs = [
    {
      id: 1,
      name: "tab 1",
      content: "abccasadad"
    },
    {
      id: 2,
      name: "tab 2",
      content: "abccasadad2"
    },
  ]
  const [indexTab, setIndexTab] = React.useState<number>(0);


  return (
    <>
      <div className="tabs-container">
        {tabs.map(tab => (
          <div key={tab.id}>
            <button onClick={() => setIndexTab(tab.id - 1)}>{tab.name}</button>
          </div>
        ))}
      </div>
      <div className="tab-content">{tabs[indexTab].content}</div>
    </>
  );
};

export default Tabs;