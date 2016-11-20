import { Route, UrlSegment, UrlSegmentGroup } from '@angular/router';
import { UrlMatchResult } from '@angular/router/src/config';

// defaultUrlMatcher
// https://github.com/angular/angular/blob/master/modules/%40angular/router/src/shared.ts

export function CaseInsensitiveUrlMatcher(
    segments: UrlSegment[], segmentGroup: UrlSegmentGroup, route: Route): UrlMatchResult {
    const path = route.path;
    const parts = path.split('/');
    const posParams: { [key: string]: UrlSegment } = {};
    const consumed: UrlSegment[] = [];

    let currentIndex = 0;

    for (let i = 0; i < parts.length; ++i) {
        if (currentIndex >= segments.length) return null;
        const current = segments[currentIndex];

        const p = parts[i];
        const isPosParam = p.startsWith(':');

        // use lower case string to compare 
        if (!isPosParam && p.toLowerCase() !== current.path.toLowerCase() ) return null;
        if (isPosParam) {
            posParams[p.substring(1)] = current;
        }
        consumed.push(current);
        currentIndex++;
    }

    if (route.pathMatch === 'full' &&
        (segmentGroup.hasChildren() || currentIndex < segments.length)) {
        return null;
    } else {
        return { consumed, posParams };
    }
}