import TalksData from '$lib/data/talks';

export function load({ params }: { params: Record<string, string> }) {
	if (params.slug) {
		const item = TalksData.items.find((item) => {
			return item.slug === params.slug;
		});

		return { item };
	}
}
