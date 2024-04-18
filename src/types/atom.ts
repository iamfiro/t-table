export default interface AtomListType {
    name: string;
    number: number; // 원자 번호
    symbol: string; // 기호
    summary: string;
    category: 'diatomic nonmetal' | 'noble gas' | 'alkali metal' | 'alkaline earth metal' | 'metalloid' | 'polyatomic nonmetal' | 'post-transition metal' | 'transition metal' | 'lanthanide' | 'actinide' | 'unknown' // 분류

    named_by: string;
    discovered_by: string;

    atomic_mass: number; // 질량
    color: null | string; // 원자 색상
    density: number; // 밀도
    boil: number; // 끓는점
    melt: number; // 녹는점
    period: number; // 주기
    phase: 'Solid' | 'Liquid' | 'Gas'; // 물질 상태

    source: string; // 출처
    img: string; // 이미지

    xpos: number; // 주기율표 상 x 위치
    ypos: number; // 주기율표 상 y 위치

    shells: number[]; // shells = 전자 껍질
}