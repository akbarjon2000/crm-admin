import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { IoMdArrowDropright, IoMdArrowDropdown } from "react-icons/io"
import Home from "../pages/home/Home";
import Generic from "../pages/generic/Generic"
export const sidebar_obj = [
    {
        id: 1,
        component: Generic,
        title: "메인",
        closeicon: IoMdArrowDropright,
        openicon: IoMdArrowDropdown,
        pathname: "/main",
        search: "?",
        hidden: false,
        role: ["ADMIN"]
    },
    {
        id: 2,
        component: Generic,
        title: "주문관리",
        closeicon: IoMdArrowDropright,
        openicon: IoMdArrowDropdown,
        // pathname: "/order",
        search: "?",
        child: [
            {
                id: 1,
                component: Generic,
                title: "eSIM 주문",
                pathname: "/order/eSIM"
            },
            {
                id: 2,
                component: Generic,
                title: "USIM 주문",
                pathname: "/order/uSIM"
            },
            {
                id: 3,
                component: Generic,
                title: "취소관리",
                pathname: "/order/cancellation"
            },
            {
                id: 4,
                component: Generic,
                title: "반품관리",
                pathname: "/order/return"
            },
        ],
        hidden: false,
        role: ["ADMIN"]
    },
    {
        id: 3,
        component: Generic,
        title: "상품관리",
        closeicon: IoMdArrowDropright,
        openicon: IoMdArrowDropdown,
        // pathname: "/product",
        search: "?",
        child: [
            {
                id: 1,
                component: Generic,
                title: "상품목록",
                pathname: "/product/list"
            },
            {
                id: 2,
                component: Generic,
                title: "커스텀 상품목록",
                pathname: "/product/customlist"
            },
            {
                id: 3,
                component: Generic,
                title: "회선상태",
                pathname: "/product/linestatus"
            },
            {
                id: 4,
                component: Generic,
                title: "eSIM 재고",
                pathname: "/product/eSIMinventory"
            },
            {
                id: 5,
                component: Generic,
                title: "USIM 재고",
                pathname: "/product/USIMstock"
            },
            {
                id: 6,
                component: Generic,
                title: "장애회선",
                pathname: "/product/faultline"
            },
        ],
        hidden: false,
        role: ["ADMIN"]
    },
    {
        id: 4,
        component: Generic,
        title: "제휴채널 관리",
        closeicon: IoMdArrowDropright,
        openicon: IoMdArrowDropdown,
        // pathname: "/affiliatechannel",
        search: "?",
        child: [{
            id: 1,
            component: Generic,
            icon: PersonOutlineIcon,
            title: "체휴채널목록",
            pathname: "/affiliatechannel/list"
        }],
        hidden: false,
        role: ["ADMIN"]
    },
    {
        id: 5,
        component: Generic,
        title: "거래처 관리",
        closeicon: IoMdArrowDropright,
        openicon: IoMdArrowDropdown,
        // pathname: "/account",
        search: "?",
        child: [
            {
                id: 1,
                component: Generic,
                title: "거래처 목록",
                pathname: "/account/list"
            },
            {
                id: 2,
                component: Generic,
                title: "거래처 판매량",
                pathname: "/account/customersales"
            },
            {
                id: 3,
                component: Generic,
                title: "거래처별 정산서",
                pathname: "/account/settlementstatement"
            }
        ],
        hidden: false,
        role: ["ADMIN"]
    },
    {
        id: 6,
        component: Generic,
        title: "통계",
        closeicon: IoMdArrowDropright,
        openicon: IoMdArrowDropdown,
        // pathname: "/statistics",
        search: "?",
        child: [
            {
                id: 1,
                component: Generic,
                title: "매출현황",
                pathname: "/statistics/salesstatus"
            },
            {
                id: 2,
                component: Generic,
                title: "상품 출고량",
                pathname: "/statistics/productshipments"
            },
            {
                id: 3,
                component: Generic,
                title: "채널 출고량",
                pathname: "/statistics/channelshipments"
            },
            {
                id: 4,
                component: Generic,
                title: "방문자 현황",
                pathname: "/statistics/visitorstatus"
            },
        ],
        hidden: false,
        role: ["ADMIN"]
    },
    {
        id: 7,
        component: Generic,
        title: "사용자관리",
        closeicon: IoMdArrowDropright,
        openicon: IoMdArrowDropdown,
        // pathname: "/user",
        search: "?",
        child: [
            {
                id: 1,
                component: Generic,
                title: "회원관리",
                pathname: "/user/member"
            },
            {
                id: 2,
                component: Generic,
                title: "쿠폰관리",
                pathname: "/user/coupon"
            },
            {
                id: 3,
                component: Generic,
                title: "적립금 관리",
                pathname: "/user/reserve"
            },
            {
                id: 4,
                component: Generic,
                title: "리뷰 관리",
                pathname: "/user/review"
            },
            {
                id: 5,
                component: Generic,
                title: "혜택 관리",
                pathname: "/user/benefit"
            },
        ],
        hidden: false,
        role: ["ADMIN"]
    },
    {
        id: 8,
        component: Generic,
        title: "환경설정",
        closeicon: IoMdArrowDropright,
        openicon: IoMdArrowDropdown,
        // pathname: "/preferences",
        search: "?",
        child: [
            {
                id: 1,
                component: Generic,
                title: "사용자 화면",
                pathname: "/preferences/userscreen"
            },
            {
                id: 2,
                component: Generic,
                title: "공지사항",
                pathname: "/preferences/announcement"
            },
            {
                id: 3,
                component: Generic,
                title: "이벤트공지",
                pathname: "/preferences/eventnotice"
            },
            {
                id: 4,
                component: Generic,
                title: "고객지원 관리",
                pathname: "/preferences/customersupport"
            },
            {
                id: 5,
                component: Generic,
                title: "직원관리",
                pathname: "/preferences/staff"
            },
        ],
        hidden: false,
        role: ["ADMIN"]
    },
]