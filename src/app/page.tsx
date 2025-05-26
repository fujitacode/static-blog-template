import styles from "@/css/page.module.scss";
import{Counter } from "@/components/Counter"

export default function Home() {
	return (
		<div className={styles.page}>
			<Counter />
		</div>
	);
}
