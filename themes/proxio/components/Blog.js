// */}据index 判断获取的时哪一张图片
//               let coverImg = PROXIO_BLOG_PLACEHOLDER_IMG_URL_1
//               if (index === 0) {
//                 coverImg = PROXIO_BLOG_PLACEHOLDER_IMG_URL_1
//               } else if (index === 1) {
//                 coverImg = PROXIO_BLOG_PLACEHOLDER_IMG_URL_2
//               } else if (index === 2) {
//                 coverImg = PROXIO_BLOG_PLACEHOLDER_IMG_URL_3
//               } else if (index === 3) {
//                 coverImg = PROXIO_BLOG_PLACEHOLDER_IMG_URL_4
//               }
//               return (
//                 <div key={index} className='w-full px-4'>
//                   <div
//                     className='wow fadeInUp group mb-10 relative overflow-hidden blog'
//                     data-wow-delay='.1s'>
//                     <div className='relative rounded-xl border overflow-hidden shadow-md dark:border-gray-700 dark:bg-gray-800'>
//                       <SmartLink href={item?.href} className='block'>
//                         {item.pageCoverThumbnail && (
//                           // 图片半透明
//                           <LazyImage
//                             src={item.pageCoverThumbnail}
//                             alt={item.title}
//                             className='w-full h-80 object-cover transition-transform duration-500 rounded-xl'
//                           />
//                         )}
//                         {/* 遮罩层，仅覆盖图片部分 */}
//                         <div className='absolute inset-0 bg-gray-100 dark:bg-hexo-black-gray transition-all duration-500 group-hover:opacity-50 group-hover:bg-black' />
//                         {/* 鼠标悬停时显示的文字内容 */}
//                         <div className='absolute inset-0 flex items-center justify-center group-hover:scale-110 duration-200 group-hover:text-white'>
//                           {!coverImg && (
//                             <p className='max-w-[370px] text-base text-body-color dark:text-dark-6 flex items-center justify-center duration-200 group-hover:text-white '>
//                               {item.summary}
//                             </p>
//                           )}
//                           <LazyImage
//                             src={coverImg}
//                             className='absolute max-h-full object-cover'
//                           />
//                         </div>
//                       </SmartLink>
//                     </div>
//                     {/* 内容部分 */}
//                     <div className='relative z-10 p-4'>
//                       <span className='inline-blocktext-center text-xs font-medium leading-loose text-white'>
//                         {item.publishDay}
//                       </span>
//                       <h3>
//                         <SmartLink
//                           href={item?.href}
//                           className='mb-4 inline-block text-xl font-semibold text-dark hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl'>
//                           {item.title}
//                         </SmartLink>
//                       </h3>
//                     </div>
//                   </div>
//                 </div>
//               )
//             })}
//           </div>
//         </div>
//       </section>
//       {/* <!-- ====== Blog Section End --> */}
//     </>
//   )
// }
