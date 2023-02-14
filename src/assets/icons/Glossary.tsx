import React from "react"


interface GlossaryProps {
    width?: number
    height?: number
}

export const Glossary = ({ width, height }: GlossaryProps) => {
    return (
        <svg width={width ? width : 171} height={height ? height : 165} viewBox="0 0 171 165" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M9.90843 76.1932C12.2238 67.8462 4.86327 67.5241 4.70119 56.7689C4.63519 52.3702 7.03302 47.8902 12.8033 45.835C15.6391 44.8255 18.4654 44.1313 20.9886 42.5254C26.7386 38.866 26.6347 31.9028 28.2036 25.9669C31.6481 12.9298 44.9059 2.57243 58.3258 2.90936C68 3.1518 76.7463 3.44977 85.566 11.701C91.601 17.3472 95.5231 24.2943 101.126 30.1149C107.059 36.2787 114.29 39.2361 122.408 41.2166C130.086 43.0894 138.439 45.3178 144.315 50.9342C149.838 56.2119 149.033 61.7321 146.665 68.2125C144.054 75.3585 149.716 80.2202 155.62 83.0031C160.591 85.3458 168.912 90.1113 169.184 98.8985C170.026 126.116 152.822 126.225 146.407 128.811C87.4 152.609 64.7551 134.254 39.7349 134.625C14.7932 134.995 0.495697 104.685 1.3622 95.7592C2.46172 84.4258 8.29132 82.0217 9.90843 76.1932Z" fill="#DEEDF2" />
            <path fillRule="evenodd" clipRule="evenodd" d="M56.3483 117.441C76.066 114.985 97.2369 118.332 108.054 121.242C114.535 122.985 116.553 126.879 123.249 127.501C136.696 128.75 167.96 127.202 168.801 130.376C170.457 136.623 160.16 140.747 136.071 145.382C136.626 145.779 133.694 153.948 114.234 157.113C106.534 158.366 93.4861 158.574 88.3934 157.377C80.5656 155.537 72.5178 154.818 64.4876 155.199C35.9264 156.553 13.3386 154.871 12.7344 149.97C12.5321 148.332 14.0199 145.937 16.5067 144.43C18.0562 143.491 15.6483 142.961 15.0866 142.801C8.18796 140.841 4.22416 138.388 3.93648 136.241C3.03413 129.501 27.4053 121.045 56.3483 117.441Z" fill="#DEEDF2" />
            <path fillRule="evenodd" clipRule="evenodd" d="M131.487 9.80717C130.81 4.27954 126.122 0 120.439 0C114.292 0 109.308 5.0093 109.308 11.1888C109.308 12.2027 109.442 13.185 109.694 14.1188C109.599 14.1201 109.505 14.1234 109.412 14.1289L109.307 14.1202V14.1359C106.119 14.3767 103.606 17.0537 103.606 20.3204C103.606 23.5871 106.119 26.2641 109.307 26.5049V26.5234H149.836V26.5228H149.836C152.32 26.5228 154.334 24.4981 154.334 22.0008C154.334 19.5035 152.32 17.479 149.836 17.479H149.836V17.4788L139.568 16.6279C139.615 16.3196 139.639 16.0039 139.639 15.6825C139.639 12.2572 136.877 9.48037 133.469 9.48037C132.776 9.48037 132.109 9.59527 131.487 9.80717Z" fill="#DEEDF2" />
            <path fillRule="evenodd" clipRule="evenodd" d="M110.687 23.3196C110.224 19.5193 107.022 16.5771 103.142 16.5771C98.9433 16.5771 95.5397 20.021 95.5397 24.2695C95.5397 24.9665 95.6313 25.6418 95.8031 26.2838C95.7385 26.2847 95.6745 26.287 95.6109 26.2908L95.5394 26.2848V26.2956C93.362 26.4611 91.6456 28.3015 91.6456 30.5474C91.6456 32.7933 93.362 34.6337 95.5394 34.7993V34.812H123.217V34.8116H123.217C124.914 34.8116 126.289 33.4196 126.289 31.7027C126.289 29.9858 124.914 28.594 123.217 28.594H123.217V28.5938L116.205 28.0088C116.237 27.7969 116.254 27.5798 116.254 27.3589C116.254 25.004 114.367 23.0949 112.04 23.0949C111.566 23.0949 111.111 23.1739 110.687 23.3196Z" fill="#EFF6F9" />
            <path fillRule="evenodd" clipRule="evenodd" d="M17.403 20.6171C17.904 16.4714 21.3726 13.2617 25.5766 13.2617C30.1247 13.2617 33.812 17.0187 33.812 21.6534C33.812 22.4137 33.7128 23.1504 33.5267 23.8508C33.5966 23.8518 33.6659 23.8543 33.7348 23.8584L33.8124 23.8519V23.8636C36.1712 24.0442 38.0306 26.052 38.0306 28.502C38.0306 30.9521 36.1712 32.9598 33.8124 33.1404V33.1543H3.82809V33.1538H3.82799C1.99008 33.1538 0.5 31.6353 0.5 29.7623C0.5 27.8893 1.99008 26.371 3.82799 26.371H3.82809V26.3708L11.4248 25.7326C11.39 25.5014 11.3721 25.2647 11.3721 25.0236C11.3721 22.4546 13.4157 20.372 15.9369 20.372C16.4497 20.372 16.9428 20.4582 17.403 20.6171Z" fill="#EFF6F9" />
            <path fillRule="evenodd" clipRule="evenodd" d="M21.2088 141.173C21.2546 141.174 21.3009 141.175 21.3476 141.173L81.7328 140.376L82.2831 140.369L95.0201 140.201C96.6824 140.179 98.1216 139.246 98.8707 137.878C98.9598 137.716 99.039 137.547 99.1077 137.372C99.3001 136.885 99.4101 136.356 99.4197 135.803C99.4204 135.767 99.421 135.731 99.4204 135.694C99.3213 117.654 98.9409 50.0469 98.7256 32.0454C98.6968 29.6286 96.7618 27.6841 94.3717 27.6422C94.3393 27.6416 94.3068 27.6411 94.2744 27.6417L20.7895 27.9438C18.3764 27.9536 16.4176 29.9022 16.3744 32.3233C16.3741 32.34 16.3738 32.3567 16.3739 32.3734L16.3459 36.4451L10.7121 36.4362C9.16492 36.4333 7.90415 37.68 7.87521 39.2319C7.875 39.2443 7.87479 39.2562 7.87458 39.2685L7.62254 81.3737C7.61898 81.9656 7.79567 82.5178 8.10133 82.9763C8.12138 83.0065 8.14183 83.0363 8.16346 83.0657C8.65976 83.752 9.45393 84.208 10.3599 84.2386L10.4263 84.2409L10.5358 84.2444L16.5917 84.4501L16.8305 136.709C16.8415 139.155 18.7949 141.131 21.2088 141.173Z" fill="#767676" />
            <path fillRule="evenodd" clipRule="evenodd" d="M21.295 135.121L94.6981 135.128L94.6897 32.7698L21.2866 32.7637L21.295 135.121Z" fill="white" />
            <path fillRule="evenodd" clipRule="evenodd" d="M61.1203 46.1989C61.1203 46.5532 60.8342 46.8402 60.4812 46.8401L30.3473 46.8377C29.9943 46.8376 29.7077 46.5506 29.7077 46.1963C29.7077 45.8424 29.9942 45.5547 30.3472 45.5547L60.4811 45.5572C60.8341 45.5573 61.1203 45.845 61.1203 46.1989Z" fill="#CEDEE7" />
            <path fillRule="evenodd" clipRule="evenodd" d="M55.6057 49.6441C55.6057 49.9986 55.3192 50.2856 54.9662 50.2856L30.3473 50.2835C29.9943 50.2835 29.7077 49.9964 29.7077 49.642C29.7077 49.2879 29.9942 49.0005 30.3472 49.0005L54.9661 49.0026C55.3191 49.0026 55.6056 49.2901 55.6057 49.6441Z" fill="#CEDEE7" />
            <path fillRule="evenodd" clipRule="evenodd" d="M63.4068 53.0906C63.4068 53.4445 63.1203 53.7318 62.7673 53.7318L30.3473 53.7291C29.9943 53.729 29.7077 53.4417 29.7077 53.0878C29.7077 52.7336 29.9942 52.4463 30.3472 52.4463L62.7672 52.449C63.1202 52.4491 63.4068 52.7364 63.4068 53.0906Z" fill="#CEDEE7" />
            <path fillRule="evenodd" clipRule="evenodd" d="M52.0353 63.5696C52.0353 63.9238 51.7488 64.2113 51.3958 64.2112L30.3473 64.2095C29.9943 64.2095 29.7077 63.9219 29.7077 63.5678C29.7077 63.2133 29.9942 62.9258 30.3472 62.9258L51.3957 62.9276C51.7487 62.9276 52.0352 63.2151 52.0353 63.5696Z" fill="#CEDEE7" />
            <path fillRule="evenodd" clipRule="evenodd" d="M61.0086 67.0154C61.0086 67.3698 60.7225 67.6571 60.3691 67.657L30.3473 67.6546C29.9943 67.6545 29.7077 67.3672 29.7077 67.0129C29.7077 66.6585 29.9942 66.3716 30.3472 66.3716L60.369 66.3741C60.7223 66.3741 61.0086 66.6611 61.0086 67.0154Z" fill="#CEDEE7" />
            <path fillRule="evenodd" clipRule="evenodd" d="M49.5201 70.4608C49.5202 70.8154 49.2336 71.1025 48.8807 71.1025L30.3473 71.1009C29.9943 71.1009 29.7077 70.8137 29.7077 70.4591C29.7077 70.1049 29.9942 69.8174 30.3472 69.8174L48.8806 69.819C49.2335 69.819 49.5201 70.1066 49.5201 70.4608Z" fill="#CEDEE7" />
            <path fillRule="evenodd" clipRule="evenodd" d="M45.0652 80.5976C45.0653 80.9519 44.7787 81.2395 44.4254 81.2394L30.3473 81.2383C29.9943 81.2383 29.7077 80.9506 29.7077 80.5963C29.7077 80.2416 29.9942 79.9536 30.3472 79.9537L44.4253 79.9548C44.7786 79.9549 45.0652 80.2429 45.0652 80.5976Z" fill="#CEDEE7" />
            <path fillRule="evenodd" clipRule="evenodd" d="M55.6057 84.0426C55.6057 84.397 55.3192 84.6844 54.9662 84.6844L30.3473 84.6824C29.9943 84.6823 29.7077 84.3949 29.7077 84.0404C29.7077 83.6864 29.9942 83.3989 30.3472 83.399L54.9661 83.401C55.3191 83.401 55.6056 83.6885 55.6057 84.0426Z" fill="#CEDEE7" />
            <path fillRule="evenodd" clipRule="evenodd" d="M51.3957 87.4887C51.3958 87.8429 51.1092 88.1303 50.7562 88.1303L30.3473 88.1286C29.9943 88.1286 29.7077 87.8411 29.7077 87.4869C29.7077 87.1324 29.9942 86.8452 30.3472 86.8453L50.7561 86.847C51.1091 86.847 51.3957 87.1341 51.3957 87.4887Z" fill="#CEDEE7" />
            <path fillRule="evenodd" clipRule="evenodd" d="M61.1203 96.4471C61.1203 96.801 60.8342 97.0883 60.4812 97.0883L30.3473 97.0858C29.9943 97.0858 29.7077 96.7984 29.7077 96.4445C29.7077 96.0902 29.9942 95.8032 30.3472 95.8033L60.4811 95.8058C60.8341 95.8058 61.1203 96.0928 61.1203 96.4471Z" fill="#CEDEE7" />
            <path fillRule="evenodd" clipRule="evenodd" d="M55.6057 99.8927C55.6057 100.247 55.3192 100.535 54.9662 100.534L30.3473 100.532C29.9943 100.532 29.7077 100.245 29.7077 99.8905C29.7077 99.5361 29.9942 99.249 30.3472 99.2491L54.9661 99.2511C55.3191 99.2511 55.6056 99.5382 55.6057 99.8927Z" fill="#CEDEE7" />
            <path fillRule="evenodd" clipRule="evenodd" d="M49.7544 103.338C49.7544 103.692 49.4679 103.98 49.1149 103.98L30.3473 103.978C29.9943 103.978 29.7077 103.691 29.7077 103.336C29.7077 102.982 29.9942 102.694 30.3472 102.694L49.1148 102.696C49.4678 102.696 49.7543 102.983 49.7544 103.338Z" fill="#CEDEE7" />
            <path fillRule="evenodd" clipRule="evenodd" d="M74.3084 43.6476C80.5032 47.6354 82.5241 55.6722 79.1192 62.0207L105.345 78.1048C106.294 78.6868 106.595 79.9402 106.017 80.9046C105.44 81.8686 104.203 82.1786 103.253 81.5965C103.223 81.5775 103.188 81.5544 103.158 81.5341L77.863 63.9605C73.4642 69.6638 65.2938 71.1345 59.1017 67.1484C52.5797 62.9498 50.6843 54.2628 54.8766 47.7835C59.0692 41.3042 67.7864 39.449 74.3084 43.6476ZM56.7661 48.9999C53.2433 54.4442 54.8358 61.7436 60.3161 65.2715C65.7965 68.7996 73.1214 67.2403 76.644 61.796C80.167 56.3519 78.5743 49.0524 73.094 45.5245C67.6136 41.9966 60.289 43.5555 56.7661 48.9999Z" fill="#732645" />
            <path fillRule="evenodd" clipRule="evenodd" d="M118.94 60.5563C120.562 59.4452 121.655 57.6002 121.728 55.4795C121.849 51.9412 119.086 48.9667 115.561 48.8416C112.307 48.726 109.533 51.0797 109.031 54.2266C108.951 54.5535 108.89 54.8847 108.844 55.2164L108.844 55.2169L108.843 55.2242L108.842 55.2268C108.829 55.326 108.816 55.4253 108.806 55.5244L108.196 60.4559L109.185 60.8279L109.196 60.8306L109.196 60.8306C109.218 60.9177 109.23 60.9648 109.23 60.9648L109.234 61.635L109.24 62.8876C109.243 63.3021 109.315 63.7107 109.453 64.0974C109.548 64.3703 109.678 64.633 109.839 64.8783C110.028 65.1661 110.257 65.4265 110.515 65.6487C110.65 65.7653 110.793 65.8701 110.944 65.9642C111.023 66.0142 111.103 66.0604 111.186 66.1039L111.186 66.1043L110.488 73.9032C110.488 73.9032 112.737 74.6713 115.244 74.2143C116.759 73.9408 118.371 73.2166 119.636 71.6073C119.636 71.6073 118.419 65.3315 118.94 60.5563Z" fill="#FFC4B8" />
            <path fillRule="evenodd" clipRule="evenodd" d="M115.221 74.1214C116.737 73.8479 118.348 73.1238 119.613 71.5146C119.613 71.5146 118.295 64.7899 118.986 59.9615C118.986 59.9615 115.17 68.4511 115.221 74.1214ZM109.185 60.8573C109.532 60.9729 109.886 60.7088 109.876 60.3425L109.809 57.981L109.185 60.8573Z" fill="#F4A48D" />
            <path fillRule="evenodd" clipRule="evenodd" d="M117.617 49.3333C114.814 49.1351 115.242 46.727 115.242 46.727C112.236 46.7196 110.916 47.8103 110.916 47.8103C108.437 49.651 109.261 53.5489 109.261 53.5489C109.729 50.6461 114.134 52.0466 115.865 52.401C116.553 53.1268 116.219 54.8274 116.53 56.2816C116.536 56.308 117.242 58.2863 117.242 58.2863L117.243 58.2887L117.28 58.4929C117.294 58.4602 117.308 58.4275 117.323 58.3948C117.83 57.2988 118.806 56.6744 119.503 56.9987C120.2 57.3235 120.355 58.4749 119.849 59.5709C119.672 59.9527 119.249 60.2706 118.99 60.5179C118.74 62.1446 118.724 63.6633 118.816 64.9708L119.541 65.028L122.58 52.6738C122.831 51.0146 122.118 50.228 120.946 49.8217C120.034 49.5052 118.845 49.42 117.617 49.3333Z" fill="#444444" />
            <path fillRule="evenodd" clipRule="evenodd" d="M108.363 78.3337L106.141 84.8455L102.639 78.8475L99.8979 78.0342L103.237 90.4737L106.578 92.8845L110.927 90.8893L112.746 79.4917L108.363 78.3337Z" fill="#9BC3D3" />
            <path fillRule="evenodd" clipRule="evenodd" d="M107.452 96.3907L106.396 118.209L109.352 145.944L112.423 146.2L114.84 120.696L121.128 95.744L107.452 96.3907Z" fill="#34466B" />
            <path fillRule="evenodd" clipRule="evenodd" d="M114.301 97.7356L116.533 119.467L122.765 146.416L125.839 146.205L125.245 120.566L127.714 94.9455L114.301 97.7356Z" fill="#34466B" />
            <path fillRule="evenodd" clipRule="evenodd" d="M127.188 82.5182C126.542 80.7979 124.63 76.5619 123.546 75.0595C120.852 71.3233 121.369 70.8306 112.747 71.2254C112.022 71.2586 111.421 71.3772 110.904 71.5688C110.231 72.0114 109.093 73.5296 108.241 78.6252C108.279 79.7211 108.375 82.9758 108.343 87.2548C108.316 90.7881 107.054 97.0402 104.557 106.011C108.945 105.895 111.264 105.833 111.516 105.824C123.738 104.889 129.875 104.36 129.928 104.236C130.373 103.378 130.415 102.525 130.415 102.525C131.461 96.7482 128.64 86.6238 128.64 86.6224C128.071 84.9725 127.524 83.416 127.188 82.5182Z" fill="#9BC3D3" />
            <path fillRule="evenodd" clipRule="evenodd" d="M121.858 72.5996L113.304 88.29L106.588 80.3156L103.929 82.9437C107.376 89.1844 109.628 92.8459 110.684 93.9283C112.269 95.5518 112.363 95.9113 117.095 91.2158C120.25 88.0855 122.84 83.4544 124.866 77.3226C124.376 76.2232 123.93 75.3584 123.529 74.7282C123.127 74.098 122.571 73.3884 121.858 72.5996Z" fill="#CEDEE7" />
            <path fillRule="evenodd" clipRule="evenodd" d="M106.079 80.826L106.239 78.1563L104.156 76.507L103.315 76.8014L104.465 78.0998L99.1995 77.9134L99.3557 79.2023L104.492 82.3944L106.079 80.826Z" fill="#FFC4B8" />
            <path fillRule="evenodd" clipRule="evenodd" d="M109.291 145.432L112.528 145.039L112.548 149.02L107.948 149.276L106.061 148.996L106.749 147.174L107.442 146.737L109.291 145.432Z" fill="#1BB3BC" />
            <path fillRule="evenodd" clipRule="evenodd" d="M122.504 145.229L120.205 147.552L120.479 149.297L126.51 148.519L125.822 145.506L122.504 145.229Z" fill="#1BB3BC" />
            <path fillRule="evenodd" clipRule="evenodd" d="M30.5219 41.857L30.7567 41.0824H31.9374L32.1722 41.857H32.912L31.7646 38.5894H30.925L29.782 41.857H30.5219ZM31.7734 40.5037H30.9295C31.1598 39.7543 31.2994 39.2846 31.3481 39.0946C31.36 39.1481 31.3795 39.2208 31.4068 39.3128C31.4342 39.4048 31.5564 39.8017 31.7734 40.5037Z" fill="#CEDEE7" />
        </svg>

    )
}