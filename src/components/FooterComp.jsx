import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterLink,
  FooterLinkGroup,
} from "flowbite-react";

export default function FooterComp() {
  return (
    <Footer container className='bg-[#252525] text-white rounded-none'>
      <div className='w-full text-center'>
        <div className='w-full justify-between sm:flex sm:items-center sm:justify-between'>
          <span className='self-center whitespace-nowrap text-xl font-semibold text-white flex flex-col'>
            <span>
              secret{" "}
              <span className='bg-[#C82A59] rounded-lg px-1'>desires</span>
            </span>
            <span className='text-sm text-slate-500'>Open Beta</span>
          </span>
          <FooterLinkGroup>
            <FooterLink href='#'>About</FooterLink>
            <FooterLink href='#'>Privacy Policy</FooterLink>
            <FooterLink href='#'>Licensing</FooterLink>
            <FooterLink href='#'>Contact</FooterLink>
          </FooterLinkGroup>
        </div>
        <FooterDivider />
        <Link to='/'>
          <FooterCopyright
            by='secret desires™'
            year={new Date().getFullYear()}
          />
        </Link>
      </div>
    </Footer>
  );
}
