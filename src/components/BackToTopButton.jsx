import { useEffect, useState } from "react";
const style = {
    position:'fixed',
    bottom: 20,
    right:20,
}

const BackToTop = () => {
    // let lastPositions = 0;
    let lastScroll = window.scrollY;
    const [isVisible, setVisible]=useState(false);
    useEffect(() => {
		const handleScroll = () => {
            let direction = lastScroll < window.scrollY ? "down":"up";;
            lastScroll = window.scrollY;
            if (direction==="up") {
                setVisible(true);
            } else setVisible(false);
		}
		document.addEventListener("scroll", handleScroll)
		return () => {
			document.removeEventListener("scroll", handleScroll)
		}
	})
    const scrollToTop = () => {
        window.scrollTo({top: 0,behavior: "smooth"});
    }
    return (
        <>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor massa ex, quis commodo sem porttitor vel. Vestibulum ac facilisis nulla, sit amet vestibulum ipsum. Maecenas et est tellus. Suspendisse sit amet risus et mi ultricies sollicitudin. Donec facilisis eros in tincidunt pellentesque. Duis sed convallis nisi, quis semper nulla. Pellentesque finibus, est sed malesuada rutrum, orci dui tristique augue, a feugiat mauris nisl vel erat. Nunc nec lectus turpis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur ut pretium diam. Nulla mauris erat, convallis eget pharetra eu, fringilla quis dolor.

Sed facilisis nibh vitae ligula convallis venenatis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis elit ex, pharetra id risus a, tincidunt varius ipsum. Cras id odio sit amet leo egestas aliquet. Ut porttitor ligula id arcu tristique sollicitudin. Nulla sed felis lectus. Sed commodo augue sed lacus hendrerit, vitae pretium dui facilisis. Integer vitae nunc nec justo fermentum consectetur.

Cras accumsan augue congue semper semper. Etiam interdum malesuada tempus. Quisque nisi sapien, gravida eu faucibus tempus, imperdiet et libero. Duis sagittis quam scelerisque, rutrum nisi at, pharetra quam. Sed est lorem, rhoncus sit amet scelerisque rhoncus, laoreet porta orci. Donec dui arcu, aliquam id ligula sed, vestibulum tincidunt ante. Maecenas posuere nunc lorem, vitae laoreet erat dictum in. Proin sit amet dignissim magna, id semper sapien. Fusce at ex non sapien ornare posuere. Vestibulum vulputate lacinia nulla, sit amet tincidunt magna rutrum vitae. Vestibulum convallis massa nisi, nec maximus tortor luctus ac. Sed vel vulputate nulla. Donec commodo condimentum tempor. Morbi nec faucibus nisl.

Donec vel nibh mi. Nam orci justo, tincidunt vitae neque sed, scelerisque convallis ante. Nulla vitae risus non libero pulvinar hendrerit. Nulla facilisis sollicitudin ex nec porta. Phasellus consectetur orci vitae justo malesuada, non congue ante pellentesque. Etiam euismod metus nisi, id congue lacus malesuada ut. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam sit amet accumsan turpis. Etiam justo massa, tempus et lectus sed, lobortis dignissim sapien. Duis viverra tincidunt dignissim.

Vivamus eget quam faucibus, feugiat nunc in, rhoncus mauris. Integer pharetra nisi velit, non rutrum lorem facilisis vel. Vivamus ac urna vestibulum, pharetra nibh quis, mattis nisi. Mauris arcu orci, fringilla sed tellus nec, pulvinar facilisis neque. In vitae libero lorem. Duis vestibulum malesuada euismod. Sed iaculis, felis pharetra pharetra bibendum, nulla sem eleifend nulla, ut laoreet urna ligula nec justo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse id tincidunt lacus, et gravida ante. Nam volutpat metus ante, non cursus elit rhoncus sed.

Generated 5 paragraphs, 434 words, 2965 bytes of Lorem Ipsum</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor massa ex, quis commodo sem porttitor vel. Vestibulum ac facilisis nulla, sit amet vestibulum ipsum. Maecenas et est tellus. Suspendisse sit amet risus et mi ultricies sollicitudin. Donec facilisis eros in tincidunt pellentesque. Duis sed convallis nisi, quis semper nulla. Pellentesque finibus, est sed malesuada rutrum, orci dui tristique augue, a feugiat mauris nisl vel erat. Nunc nec lectus turpis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur ut pretium diam. Nulla mauris erat, convallis eget pharetra eu, fringilla quis dolor.

Sed facilisis nibh vitae ligula convallis venenatis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis elit ex, pharetra id risus a, tincidunt varius ipsum. Cras id odio sit amet leo egestas aliquet. Ut porttitor ligula id arcu tristique sollicitudin. Nulla sed felis lectus. Sed commodo augue sed lacus hendrerit, vitae pretium dui facilisis. Integer vitae nunc nec justo fermentum consectetur.

Cras accumsan augue congue semper semper. Etiam interdum malesuada tempus. Quisque nisi sapien, gravida eu faucibus tempus, imperdiet et libero. Duis sagittis quam scelerisque, rutrum nisi at, pharetra quam. Sed est lorem, rhoncus sit amet scelerisque rhoncus, laoreet porta orci. Donec dui arcu, aliquam id ligula sed, vestibulum tincidunt ante. Maecenas posuere nunc lorem, vitae laoreet erat dictum in. Proin sit amet dignissim magna, id semper sapien. Fusce at ex non sapien ornare posuere. Vestibulum vulputate lacinia nulla, sit amet tincidunt magna rutrum vitae. Vestibulum convallis massa nisi, nec maximus tortor luctus ac. Sed vel vulputate nulla. Donec commodo condimentum tempor. Morbi nec faucibus nisl.

Donec vel nibh mi. Nam orci justo, tincidunt vitae neque sed, scelerisque convallis ante. Nulla vitae risus non libero pulvinar hendrerit. Nulla facilisis sollicitudin ex nec porta. Phasellus consectetur orci vitae justo malesuada, non congue ante pellentesque. Etiam euismod metus nisi, id congue lacus malesuada ut. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam sit amet accumsan turpis. Etiam justo massa, tempus et lectus sed, lobortis dignissim sapien. Duis viverra tincidunt dignissim.

Vivamus eget quam faucibus, feugiat nunc in, rhoncus mauris. Integer pharetra nisi velit, non rutrum lorem facilisis vel. Vivamus ac urna vestibulum, pharetra nibh quis, mattis nisi. Mauris arcu orci, fringilla sed tellus nec, pulvinar facilisis neque. In vitae libero lorem. Duis vestibulum malesuada euismod. Sed iaculis, felis pharetra pharetra bibendum, nulla sem eleifend nulla, ut laoreet urna ligula nec justo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse id tincidunt lacus, et gravida ante. Nam volutpat metus ante, non cursus elit rhoncus sed.

Generated 5 paragraphs, 434 words, 2965 bytes of Lorem Ipsum</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor massa ex, quis commodo sem porttitor vel. Vestibulum ac facilisis nulla, sit amet vestibulum ipsum. Maecenas et est tellus. Suspendisse sit amet risus et mi ultricies sollicitudin. Donec facilisis eros in tincidunt pellentesque. Duis sed convallis nisi, quis semper nulla. Pellentesque finibus, est sed malesuada rutrum, orci dui tristique augue, a feugiat mauris nisl vel erat. Nunc nec lectus turpis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur ut pretium diam. Nulla mauris erat, convallis eget pharetra eu, fringilla quis dolor.

    Sed facilisis nibh vitae ligula convallis venenatis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis elit ex, pharetra id risus a, tincidunt varius ipsum. Cras id odio sit amet leo egestas aliquet. Ut porttitor ligula id arcu tristique sollicitudin. Nulla sed felis lectus. Sed commodo augue sed lacus hendrerit, vitae pretium dui facilisis. Integer vitae nunc nec justo fermentum consectetur.

    Cras accumsan augue congue semper semper. Etiam interdum malesuada tempus. Quisque nisi sapien, gravida eu faucibus tempus, imperdiet et libero. Duis sagittis quam scelerisque, rutrum nisi at, pharetra quam. Sed est lorem, rhoncus sit amet scelerisque rhoncus, laoreet porta orci. Donec dui arcu, aliquam id ligula sed, vestibulum tincidunt ante. Maecenas posuere nunc lorem, vitae laoreet erat dictum in. Proin sit amet dignissim magna, id semper sapien. Fusce at ex non sapien ornare posuere. Vestibulum vulputate lacinia nulla, sit amet tincidunt magna rutrum vitae. Vestibulum convallis massa nisi, nec maximus tortor luctus ac. Sed vel vulputate nulla. Donec commodo condimentum tempor. Morbi nec faucibus nisl.

    Donec vel nibh mi. Nam orci justo, tincidunt vitae neque sed, scelerisque convallis ante. Nulla vitae risus non libero pulvinar hendrerit. Nulla facilisis sollicitudin ex nec porta. Phasellus consectetur orci vitae justo malesuada, non congue ante pellentesque. Etiam euismod metus nisi, id congue lacus malesuada ut. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam sit amet accumsan turpis. Etiam justo massa, tempus et lectus sed, lobortis dignissim sapien. Duis viverra tincidunt dignissim.

    Vivamus eget quam faucibus, feugiat nunc in, rhoncus mauris. Integer pharetra nisi velit, non rutrum lorem facilisis vel. Vivamus ac urna vestibulum, pharetra nibh quis, mattis nisi. Mauris arcu orci, fringilla sed tellus nec, pulvinar facilisis neque. In vitae libero lorem. Duis vestibulum malesuada euismod. Sed iaculis, felis pharetra pharetra bibendum, nulla sem eleifend nulla, ut laoreet urna ligula nec justo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse id tincidunt lacus, et gravida ante. Nam volutpat metus ante, non cursus elit rhoncus sed.

    Generated 5 paragraphs, 434 words, 2965 bytes of Lorem Ipsum</p>
            {isVisible && <button style={style} onClick={scrollToTop}>Back to top</button>}
        </>
    )
}
export default BackToTop;