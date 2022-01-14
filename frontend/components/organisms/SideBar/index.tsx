import Image from 'next/image';
import Footer from './Footer';
import MenuItem from './MenuItem';

export default function SideBar() {
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <div className="user text-center pb-50 pe-30">
          <Image
            src="/img/avatar-1.png"
            width={90}
            height={90}
            className="img-fluid mb-20"
            alt=""
          />
          <h2 className="fw-bold text-xl color-palette-1 m-0">Shayna Anne</h2>
          <p className="color-palette-2 m-0">shayna@anne.com</p>
        </div>
        <div className="menus">
          <MenuItem title="Overview" icon="ic-menu-overview" active />
          <MenuItem title="Transactions" icon="ic-menu-transactions" />
          <MenuItem title="Messages" icon="ic-menu-messages" />
          <MenuItem title="Card" icon="ic-menu-card" />
          <MenuItem title="Rewards" icon="ic-menu-rewards" />
          <MenuItem title="Settings" icon="ic-menu-settings" />
          <MenuItem title="Log Out" icon="ic-menu-logout" />
        </div>
        <Footer />
      </div>
    </section>
  );
}
