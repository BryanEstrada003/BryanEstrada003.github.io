<script lang="ts">
	import Assets from '$lib/data/assets';
	import type { Talk } from '$lib/data/types';
	import { getMonthAndYear, getYouTubeId, href } from '$lib/utils';
	import { ellipsify } from '@riadh-adrani/utils';
	import { mode } from 'mode-watcher';
	import ButtonLink from '../common/button-link/button-link.svelte';
	import SkillBadge from '../common/skill-badge/skill-badge.svelte';
	import AvatarFallback from '../ui/avatar/avatar-fallback.svelte';
	import AvatarImage from '../ui/avatar/avatar-image.svelte';
	import Avatar from '../ui/avatar/avatar.svelte';
	import Badge from '../ui/badge/badge.svelte';
	import Button from '../ui/button/button.svelte';
	import { CardHeader } from '../ui/card';
	import CardContent from '../ui/card/card-content.svelte';
	import CardTitle from '../ui/card/card-title.svelte';
	import FancyCard from '../ui/card/fancy-card.svelte';
	import {
		DropdownMenu,
		DropdownMenuContent,
		DropdownMenuItem,
		DropdownMenuTrigger
	} from '../ui/dropdown-menu';
	import Icon from '../ui/icon/icon.svelte';
	import Separator from '../ui/separator/separator.svelte';
	import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';
	import Muted from '../ui/typography/muted.svelte';

	const { talk }: { talk: Talk } = $props();

	let from = $derived(getMonthAndYear(talk.period.from));

	let youtubeId = $derived(talk.youtube ? getYouTubeId(talk.youtube) : null);
	let mediaSrc = $derived(
		youtubeId
			? `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`
			: talk.carrousel && talk.carrousel.length > 0
				? talk.carrousel[0].src
				: null
	);
</script>

<FancyCard
	color={talk.color}
	class="flex h-full flex-col"
	href={href(`/talks/${talk.slug}`)}
>
	{#if mediaSrc}
		<div class="relative w-full overflow-hidden rounded-t-lg">
			<img
				src={mediaSrc}
				alt={talk.name}
				class="aspect-video w-full object-cover"
			/>
			{#if youtubeId}
				<div
					class="absolute inset-0 flex items-center justify-center bg-black/20"
				>
					<div
						class="flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-white shadow-lg"
					>
						<Icon icon="i-carbon-play-filled" />
					</div>
				</div>
			{/if}
		</div>
	{/if}
	<CardHeader class="flex w-full flex-col gap-4">
		<div class="flex w-full flex-row items-center gap-1 overflow-x-hidden">
			<CardTitle class="h-auto min-w-0 flex-1 overflow-x-hidden">
				<Tooltip>
					<TooltipTrigger
						class="w-full overflow-y-auto overflow-x-hidden truncate text-ellipsis text-nowrap text-left"
					>
						{talk.name}
					</TooltipTrigger>
					<TooltipContent>{talk.name}</TooltipContent>
				</Tooltip>
			</CardTitle>
			{#if talk.links.length > 2}
				<ButtonLink link={talk.links[0]} />
				<DropdownMenu>
					<DropdownMenuTrigger>
						<Button size="icon" variant="outline"
							><Icon icon="i-carbon-overflow-menu-vertical" /></Button
						>
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						{#each talk.links.slice(1) as link (link.to)}
							<a href={link.to} target={'_blank'}>
								<DropdownMenuItem>
									{link.label}
								</DropdownMenuItem>
							</a>
						{/each}
					</DropdownMenuContent>
				</DropdownMenu>
			{:else}
				{#each talk.links as link (link.to)}
					<ButtonLink {link} />
				{/each}
			{/if}
		</div>
		<Separator />
	</CardHeader>
	<CardContent class="flex flex-1 flex-col gap-4">
		<Muted className="flex flex-row gap-2 items-center">
			<Icon icon="i-carbon-assembly-cluster" />
			<Muted>{talk.type}</Muted>
		</Muted>
		<!-- <Muted className="flex flex-row gap-2 items-center">
			<Icon icon="i-carbon-time" />
			<Muted>{exactDuration}</Muted>
		</Muted> -->
		<Muted className="py-4 md:py-2 md:min-h-[100px] md:max-h-[100px]"
			>{ellipsify(talk.shortDescription, 100)}</Muted
		>
		<div class="flex w-full flex-row items-center justify-between">
			<Badge variant="outline">{from}</Badge>
			<!-- <Badge variant="outline">{to}</Badge> -->
		</div>
		<Separator />
		<div class="flex flex-row flex-wrap items-center gap-2">
			{#each talk.skills as skill (skill.slug)}
				<SkillBadge {skill} />
			{/each}
		</div>
	</CardContent>
</FancyCard>
