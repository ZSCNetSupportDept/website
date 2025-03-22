import React from 'react';
import Link from '@docusaurus/Link';
import styles from './style.module.css';

const DocsCard = ({ title, description, link }) => {
  return (
    <div className={styles.card}>
      <Link to={link} className={styles.cardLink}>
        <h3>{title}</h3>
        <p>{description}</p>
      </Link>
    </div>
  );
};

// 模拟多个 DocsCard
const DocsCardList = () => {
  return (
    <div className={styles.cardContainer}>
<DocsCard
  title="🛠️技能"
  description="进行网络维修需要掌握的技能"
  link="/docs/wiki/技能/电脑技能/查看ip"
/>

<DocsCard
  title="📚基础知识"
  description="有关校园网络以及相关概念的基础知识"
  link="/docs/wiki/基础知识/学校的网络结构"
/>

<DocsCard
  title="🏞️片区介绍"
  description="各大片区的相关信息，以及在这些片区值班的注意事项"
  link="/docs/wiki/片区介绍/东门"
/>

<DocsCard
  title="🐞故障介绍"
  description="记录了常见的故障以及相关的解决办法，另外旧的错误码也放在这个板块下面"
  link="/docs/wiki/故障/通用/ip查不到"
/>

<DocsCard
  title="💻资源"
  description="我们在这个网站上存放了一些可能会有用的资源，以方便大家下载"
  link="/docs/wiki/资源"
/>
<DocsCard
  title="🗃️杂项"
  description="一些杂七杂八的文章，暂时都放在这里"
  link="/docs/wiki/杂项/MacOS修理指南"
/>
    </div>
  );
};

export default DocsCardList;
