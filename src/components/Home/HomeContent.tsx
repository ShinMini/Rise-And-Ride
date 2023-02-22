import {ContentContainer, ContentText, HeaderText, styles} from "src/components/Home/home.style";
import {Image} from "moti";
import React from "react";

const HomeContent: React.FC = () => (
<ContentContainer>
    <HeaderText>모두페이 카드를 통해 전기차 충전시, 10% 적립!</HeaderText>

    <ContentText>{'모두페이를 통해 전기요금 충전시, 결재금액의 10% 포인트 즉시 반환!'}</ContentText>
    <ContentText>전기차 충전기별 호환 카드를 따로 발급 받을 필요 없이, 모두페이 하나만 있다면 모든 전기차 충전기 결제가 가능해요!</ContentText>
    <ContentText>모두페이 카드와 함께, 전기차 충전을 더욱 스마트하게 즐겨보세요!</ContentText>

    <Image source={require('assets/jpeg/Car_White.jpeg')}  style={styles.image}/>

    <ContentText>전기차 충전시, 결재금액의 10%를 포인트로 적립해드려요.</ContentText>
    <ContentText>전기차 충전기별 호환 카드를 따로 발급 받을 필요 없이</ContentText>
    <ContentText>모두페이 하나로 모든 충전기 결제 가능해요.</ContentText>
    <ContentText>모두페이 카드와 함께라면, 전기차 충전을 더욱 스마트하게 즐겨보세요!</ContentText>
</ContentContainer>
)

export default HomeContent
