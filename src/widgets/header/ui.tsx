// import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'

// import { Logo } from '~/widgets/logo'
// import { useDisclosure } from '@mantine/hooks'

// const links = [
//   { link: '/', label: 'Home' },
//   { link: '/blog', label: 'Blog' },
//   { link: '/stats', label: 'Stats' },
// ]

// export const Header = () => {
//   const navigate = useNavigate();
//   const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);

//   const index = links.findIndex((item) => location.pathname.toLowerCase() === item.link.toLowerCase());
//   const [active, setActive] = useState(index);

//   const menuItems = links.map((item, index) => (
//     <a
//       key={index}
//       href={item.link}
//       data-active={index === active || undefined}
//       onClick={(event) => {
//         event.preventDefault();
//         setActive(index);
//         navigate(item.link);
//       }}
//     >
//       {item.label}
//     </a>
//   ));

//   return (
//     <Box className="relative max-w-screen-xl mx-auto px-5 bg-blue-200">
//       <header>
//         <Group justify="space-between">
//           <a href="/">
//             <Group>
//               <Logo />
//               checkmeup.net
//             </Group>
//           </a>

//           <Group h="100%" gap={0} visibleFrom="sm">
//             {menuItems}
//           </Group>

//           <Group visibleFrom="sm">
//             <Button
//               onClick={() => {
//                 setActive(-1);
//                 navigate('/auth');
//               }}
//             >
//               Log in
//             </Button>
//           </Group>

//           <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
//         </Group>
//       </header>

//       <Drawer
//         opened={drawerOpened}
//         onClose={closeDrawer}
//         size="100%"
//         padding="md"
//         title="Navigation"
//         hiddenFrom="sm"
//         zIndex={1000000}
//       >
//         <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
//           <Divider my="sm" />

//           <a href="/">Home</a>
//           <a href="/blog">Blog</a>
//           <a href="/stats">Stats</a>

//           <Divider my="sm" />

//           <Group justify="center" grow pb="xl" px="md">
//             <Button
//               variant="default"
//               onClick={() => {
//                 location.href = '/login';
//               }}
//             >
//               Log in
//             </Button>
//             <Button
//               onClick={() => {
//                 location.href = '/signup';
//               }}
//             >
//               Sign up
//             </Button>
//           </Group>
//         </ScrollArea>
//       </Drawer>
//     </Box>
//   );
// };

export const Header = () => {
  return <div className="relative mx-auto max-w-screen-xl bg-red-50 text-center">Header</div>
}
