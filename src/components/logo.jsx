import PropTypes from 'prop-types';
import { useRouter } from 'next-nprogress-bar';

// mui
import { Box } from '@mui/material';

export const Logo = () => {
  const { push } = useRouter();
  return (
    <Box
      sx={{
        cursor: 'pointer',

        svg: {
          width: 150,
          height: 'auto'
        }
      }}
      onClick={() => push('/')}
    >
      {/* <svg width="178" height="54" viewBox="0 0 178 54" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.9754 24.5698C17.7594 23.7075 17.2893 22.6574 16.9873 21.8205C16.7559 21.1795 16.323 19.5578 15.9371 19.1713C15.9358 18.7427 15.2975 16.9961 15.0664 16.5819L14.6057 15.1894C14.4222 14.8375 14.6914 15.0264 14.1044 14.9852L9.44934 14.9914L9.44438 17.8569C10.1021 18.0748 10.5766 18.6949 10.5766 19.4257C10.5766 20.3383 9.83673 21.078 8.92416 21.078C8.01165 21.078 7.2719 20.3383 7.2719 19.4257C7.2719 18.7535 7.67334 18.175 8.24931 17.917C8.46506 17.2461 8.26336 15.7676 8.31053 14.9819L3.26918 14.9927C3.20491 15.1276 3.23332 15.0279 3.17577 15.2697C2.21691 25.098 1.25826 34.9228 0.329419 44.7538C0.0932046 46.0789 -0.210383 48.8546 0.208158 50.0401C0.705076 51.447 1.82591 52.5285 3.24314 52.9919C4.88941 53.356 6.98325 53.1878 8.73114 53.188C10.6567 53.1883 12.5827 53.1881 14.5077 53.1892L14.4812 44.6736L14.4878 46.7742C14.4924 45.7915 14.4972 44.8101 14.4967 43.8335C14.4963 42.2578 14.4973 40.6822 14.497 39.1067C14.4967 38.0093 14.3624 35.1892 14.5496 34.2941L16.3867 39.3321C17.8776 43.1948 19.5058 49.3582 21.3681 52.8787C21.4721 53.3642 21.4523 53.1927 22.8063 53.189L27.8481 53.1895C29.8649 53.1915 32.3293 53.4847 33.8233 52.4631C34.1283 52.2686 34.1414 52.301 34.2279 52.1101C35.114 51.6644 36.1365 49.9141 35.985 48.244C35.8291 46.5229 35.6482 44.7794 35.4858 43.0712C35.1567 39.608 34.8294 36.1284 34.475 32.6844L33.6573 24.1662C33.4154 22.5534 33.0854 15.8345 32.6799 15.0006L27.709 14.9819L27.7011 17.8999C28.2985 18.1487 28.7186 18.7381 28.7186 19.4257C28.7186 20.3383 27.9789 21.078 27.0664 21.078C26.1538 21.078 25.4139 20.3383 25.4139 19.4257C25.4139 18.7042 25.8766 18.0905 26.5214 17.8654L26.512 14.9829L21.4467 15.0074L21.4519 33.7632L17.9754 24.5698Z"
          fill={theme.palette.primary.main}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.44428 17.8124L9.44924 14.9468C9.36053 11.507 9.27353 8.89058 11.1676 6.5163C12.8619 4.39244 15.0061 3.08578 17.9745 3.08712C20.0346 3.088 22.1072 3.88804 23.5435 5.1373C23.7935 5.35466 23.9007 5.55775 24.1584 5.78054C24.575 6.14064 24.4988 6.11838 24.7912 6.50809C26.6382 8.96793 26.658 11.3686 26.512 14.9384L26.5213 17.8209C26.6919 17.7613 26.8753 17.7288 27.0663 17.7288C27.2912 17.7288 27.5055 17.7739 27.701 17.8553L27.7089 14.9373C27.5167 11.1532 28.2472 8.74091 25.3406 5.22751L24.6174 4.47857C24.1659 3.96698 22.5577 2.99262 21.7988 2.6662C20.3202 2.03015 18.4009 1.7355 16.6151 1.99718C14.1575 2.3575 12.221 3.48251 10.6678 5.17905C9.05441 6.9413 8.24394 9.38575 8.2444 11.9623C8.24466 13.8007 8.1139 16.11 8.23898 17.8773C8.44781 17.782 8.67979 17.7288 8.92406 17.7288C9.10582 17.7288 9.28071 17.758 9.44428 17.8124Z"
          fill={theme.palette.primary.main}
        />
        <path
          d="M9.61972 17.1917L9.62477 14.2756C9.53618 10.7749 9.44924 8.11221 11.3419 5.69601C13.0348 3.53452 15.1775 2.20476 18.1434 2.2061C20.202 2.2071 22.2732 3.02134 23.7084 4.29258C23.9582 4.51382 24.0654 4.7205 24.3229 4.94725C24.739 5.31367 24.6629 5.29108 24.9553 5.68769C26.8007 8.19097 26.8204 10.6341 26.6746 14.2669L26.642 17.1066C26.8996 17.1369 27.1739 17.0255 27.1612 17.1876C27.3859 17.1876 27.6675 17.1526 27.8628 17.2355L27.8706 14.2659C27.6787 10.4148 28.4085 7.95996 25.5041 4.38428L24.7815 3.62229C24.3304 3.10163 22.7234 2.11002 21.9651 1.77783C20.4874 1.13059 18.5697 0.830526 16.7852 1.09706C14.3295 1.46366 12.3945 2.60845 10.8424 4.33518C9.23034 6.12855 8.4204 8.61625 8.42091 11.2383C8.42103 13.1092 8.12909 17.2306 8.12909 17.2306C8.12909 17.2306 8.36109 17.2307 9.10003 17.1066C9.28165 17.1066 9.45637 17.1365 9.61972 17.1917Z"
          stroke={theme.palette.primary.main}
          strokeWidth="1.39352"
          strokeMiterlimit="22.9256"
        />
        <path
          d="M54.649 50.8899C51.9357 50.8899 49.534 50.2849 47.444 49.0749C45.354 47.8283 43.704 46.1233 42.494 43.9599C41.3207 41.7966 40.734 39.3033 40.734 36.4799C40.734 33.6566 41.339 31.1633 42.549 28.9999C43.7957 26.8366 45.4824 25.1499 47.609 23.9399C49.7724 22.6933 52.2474 22.0699 55.034 22.0699C57.454 22.0699 59.6724 22.7116 61.689 23.9949C63.7424 25.2416 65.374 27.0933 66.584 29.5499C67.8307 31.9699 68.454 34.9216 68.454 38.4049H47.609L48.269 37.7449C48.269 39.1016 48.599 40.2933 49.259 41.3199C49.9557 42.3099 50.8357 43.0799 51.899 43.6299C52.999 44.1433 54.1724 44.3999 55.419 44.3999C56.9224 44.3999 58.1507 44.0883 59.104 43.4649C60.0574 42.8049 60.7907 41.9616 61.304 40.9349L67.794 43.4649C67.024 45.0049 66.0157 46.3433 64.769 47.4799C63.559 48.5799 62.1107 49.4233 60.424 50.0099C58.7374 50.5966 56.8124 50.8899 54.649 50.8899ZM48.654 33.6749L47.994 33.0149H61.249L60.644 33.6749C60.644 32.3549 60.3324 31.3099 59.709 30.5399C59.0857 29.7333 58.3157 29.1466 57.399 28.7799C56.519 28.4133 55.6574 28.2299 54.814 28.2299C53.9707 28.2299 53.0724 28.4133 52.119 28.7799C51.1657 29.1466 50.3407 29.7333 49.644 30.5399C48.984 31.3099 48.654 32.3549 48.654 33.6749ZM69.1214 50.2299L80.3964 34.4999L88.2614 22.7299H96.8414L85.8964 38.0749L77.8114 50.2299H69.1214ZM88.8664 50.2299L80.8914 38.0749L69.8364 22.7299H78.4164L86.2814 34.4999L97.5014 50.2299H88.8664ZM112.524 50.8899C109.48 50.8899 107.17 50.1383 105.594 48.6349C104.054 47.1316 103.284 44.9866 103.284 42.1999V14.1499H110.544V40.6049C110.544 41.7783 110.8 42.6766 111.314 43.2999C111.827 43.8866 112.579 44.1799 113.569 44.1799C113.935 44.1799 114.339 44.1066 114.779 43.9599C115.219 43.7766 115.677 43.5199 116.154 43.1899L118.684 48.6349C117.804 49.2949 116.814 49.8266 115.714 50.2299C114.65 50.6699 113.587 50.8899 112.524 50.8899ZM98.8287 28.8899V22.7299H117.419V28.8899H98.8287ZM139.449 50.2299L139.229 44.6749V36.3149C139.229 34.6649 139.046 33.2533 138.679 32.0799C138.349 30.9066 137.799 30.0083 137.029 29.3849C136.296 28.7249 135.287 28.3949 134.004 28.3949C132.831 28.3949 131.767 28.6516 130.814 29.1649C129.861 29.6783 129.054 30.4666 128.394 31.5299L122.014 29.3299C122.527 28.1566 123.279 27.0199 124.269 25.9199C125.259 24.7833 126.542 23.8666 128.119 23.1699C129.732 22.4366 131.694 22.0699 134.004 22.0699C136.791 22.0699 139.101 22.6016 140.934 23.6649C142.804 24.7283 144.179 26.2316 145.059 28.1749C145.976 30.0816 146.416 32.3549 146.379 34.9949L146.214 50.2299H139.449ZM131.749 50.8899C128.449 50.8899 125.882 50.1566 124.049 48.6899C122.252 47.2233 121.354 45.1516 121.354 42.4749C121.354 39.5416 122.326 37.3416 124.269 35.8749C126.249 34.3716 129.017 33.6199 132.574 33.6199H139.559V39.0099H135.104C132.721 39.0099 131.071 39.3033 130.154 39.8899C129.237 40.4399 128.779 41.2283 128.779 42.2549C128.779 43.0616 129.146 43.7033 129.879 44.1799C130.612 44.6199 131.639 44.8399 132.959 44.8399C134.169 44.8399 135.232 44.5649 136.149 44.0149C137.102 43.4283 137.854 42.6949 138.404 41.8149C138.954 40.8983 139.229 39.9633 139.229 39.0099H140.989C140.989 42.7499 140.274 45.6649 138.844 47.7549C137.451 49.8449 135.086 50.8899 131.749 50.8899ZM152.165 50.2299V11.7299H159.425V50.2299H152.165ZM165.7 50.2299V11.7299H172.96V50.2299H165.7Z"
          fill={theme.palette.text.primary}
        />
      </svg> */}
    </Box>
  );
};

Logo.propTypes = {
  sx: PropTypes.object,
  isMobile: PropTypes.bool
};
export default Logo;
